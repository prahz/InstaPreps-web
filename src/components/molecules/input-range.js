import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { amountToThousandSeparator, isEmpty } from 'src/helper';
import useInteractiveStates from 'src/hooks/interactiveStates';

const InputRange = ({ control, name, placeholder, inWords, min, max, step }) => {
  const [data, setData] = useState(0);
  const { lostFocus, onBlur, onFocus } = useInteractiveStates();
  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: ''
  });

  const updateValue = useCallback((val) => {
    setData(val);
  }, []);

  return (
    <div className='relative rounded-md shadow-sm' role='presentation'>
      <div className='relative'>
        <div className=''>
          <input
            type='text'
            className={`block w-full opacity-90 ${
              error && lostFocus ? 'border border-red text-red' : (value && lostFocus && 'border') || ''
            }`}
            defaultValue={amountToThousandSeparator(value || data)}
            placeholder={placeholder}
            onChange={(e) => {
              const {
                target: { value }
              } = e;
              if (Number(value.replace(/, /g, '')) > max) return;
              const toNumber = Number(value.replace(/, /g, ''));
              if (Number.isNaN(toNumber)) return;
              updateValue(toNumber);
              onChange(toNumber);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <input
          className='absolute bottom-0 w-full h-1 rounded outline-none appearance-none bg-secondary'
          type='range'
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            setData(e.target.value);
            onChange(e.target.value);
          }}
          value={value || data}
          {...inputProps}
        />
      </div>
      <div className='absolute inset-y-0 flex items-center pointer-events-none right-3'>
        {!error && value && lostFocus && (
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
      {!isEmpty(inWords) && <p className='el-input-help-text'>{inWords}</p>}
    </div>
  );
};

InputRange.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  inWords: PropTypes.string
};

InputRange.defaultProps = {
  placeholder: '',
  min: 0,
  max: 1000,
  step: 10,
  inWords: ''
};

export default InputRange;
