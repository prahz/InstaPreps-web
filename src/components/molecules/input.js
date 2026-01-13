import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'src/helper';
import useInteractiveStates from 'src/hooks/interactiveStates';
import Image from 'next/image';
import { INPUT_ICONS } from 'src/constants';

export const Input = React.forwardRef(({ name, value, error, errorMessage, inWords, register, iconName, ...rest }) => {
  const { lostFocus, onBlur, onFocus } = useInteractiveStates();
  return (
    <div className='relative rounded-md shadow-sm' role='presentation'>
      <input
        className={`block w-full pr-10 ${
          error && lostFocus ? 'border border-red text-red' : (value && lostFocus && 'border') || ''
        }`}
        aria-invalid={error}
        aria-describedby={`${name}-error`}
        {...(register ? register(name) : {})}
        {...(register ? {} : { value })}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
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
        {iconName && INPUT_ICONS[iconName] && (
          <div className='flex ml-2'>
            <Image
              src={INPUT_ICONS[iconName].src}
              alt={iconName}
              height={INPUT_ICONS[iconName].height}
              width={INPUT_ICONS[iconName].width}
            />
          </div>
        )}
      </div>
      {error && errorMessage && lostFocus && (
        <p id={`${name}-error`} className='el-input-error'>
          {errorMessage}
        </p>
      )}
      {!isEmpty(inWords) && <p className='el-input-help-text'>{inWords}</p>}
    </div>
  );
});

Input.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  inWords: PropTypes.string,
  register: PropTypes.func,
  iconName: PropTypes.string
};

Input.defaultProps = {
  error: undefined,
  value: undefined,
  errorMessage: '',
  inWords: '',
  register: undefined,
  iconName: undefined
};
