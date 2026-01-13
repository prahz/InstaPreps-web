import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import Image from 'next/image';
import CalenderIcon from 'icons/calender.svg';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { INPUT_ICONS } from 'src/constants';
import useInteractiveStates from 'src/hooks/interactiveStates';

const Icon = ({ iconName }) => {
  return (
    <Image
      src={INPUT_ICONS[iconName].src}
      alt={iconName}
      height={INPUT_ICONS[iconName].height}
      width={INPUT_ICONS[iconName].width}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired
};

Icon.defaultProps = {};

const DateField = ({ control, name, calendarIcon, minDate, maxDate, defaultValue, format, view }) => {
  const [open, setOpen] = useState(false);
  const { lostFocus, onBlur, onFocus } = useInteractiveStates();

  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: ''
  });

  const onViewChange = useCallback(
    (val) => {
      if (val.view === 'month') {
        onChange(val.activeStartDate);
        setOpen(false);
      }
    },
    [onChange]
  );

  const onCalendarClose = useCallback(() => {
    setOpen(false);
    onBlur();
  }, [onBlur]);

  const onCalendarOpen = useCallback(() => {
    setOpen(true);
    onFocus();
  }, [onFocus]);

  return (
    <div className='relative rounded-md shadow-sm' role='presentation'>
      <DatePicker
        {...(defaultValue ? { defaultValue: defaultValue() } : {})}
        dayPlaceholder='Date'
        monthPlaceholder='Month'
        yearPlaceholder='Year'
        {...(minDate ? { minDate: minDate() } : {})}
        {...(maxDate ? { maxDate: maxDate() } : {})}
        format={format}
        showLeadingZeros
        {...(error && lostFocus ? { className: 'date-picker-error' } : {})}
        clearIcon={null}
        {...(calendarIcon ? { calendarIcon: <Icon iconName={calendarIcon} /> } : { calendarIcon: <CalenderIcon /> })}
        value={value}
        {...(view ? { view } : {})}
        {...(view ? { onViewChange } : {})}
        onCalendarClose={onCalendarClose}
        onCalendarOpen={onCalendarOpen}
        isOpen={open}
        onChange={onChange}
        {...inputProps}
      />
      <div className='absolute inset-y-0 flex items-center pointer-events-none right-10'>
        {!error && value && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 text-green focus:hidden'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        )}
        {error && lostFocus && (
          <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-red' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </div>
      {error && lostFocus && (
        <p id={`${name}-error`} className='el-input-error'>
          {error.message}
        </p>
      )}
    </div>
  );
};

DateField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  calendarIcon: PropTypes.string,
  minDate: PropTypes.func,
  maxDate: PropTypes.func,
  defaultValue: PropTypes.func,
  format: PropTypes.string,
  view: PropTypes.string
};

DateField.defaultProps = {
  calendarIcon: undefined,
  minDate: undefined,
  maxDate: undefined,
  defaultValue: undefined,
  format: 'dd/MM/yyyy',
  view: undefined
};

export default DateField;
