import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import Select from 'react-select';
import useInteractiveStates from 'src/hooks/interactiveStates';

const DropdownField = ({ control, name, options, placeholder, isMulti }) => {
  const { lostFocus, onBlur, onFocus } = useInteractiveStates();
  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: ''
  });
  return (
    <div className='relative rounded-md shadow-sm AppSelect' role='presentation'>
      <Select
        className={`el-select-container ${error && lostFocus ? 'el-select-error' : ''}`}
        classNamePrefix='el-select'
        isMulti={isMulti}
        placeholder={placeholder}
        options={options}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        onChange={(val) => onChange(val.id)}
        defaultValue={options.filter((option) => option.id === value)}
        {...inputProps}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className='absolute inset-y-0 flex items-center pointer-events-none right-10'>
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
    </div>
  );
};

DropdownField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  isMulti: PropTypes.bool
};

DropdownField.defaultProps = {
  placeholder: 'Please select one option',
  isMulti: false
};

export default DropdownField;
