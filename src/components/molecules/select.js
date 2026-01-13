import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'src/helper';
import useInteractiveStates from 'src/hooks/interactiveStates';

export const Select = React.forwardRef(
  ({ name, options, register, error, errorMessage, inWords, value, placeholder, ...rest }) => {
    const { lostFocus, onBlur, onFocus } = useInteractiveStates('select');

    return (
      <div className='relative'>
        <select
          defaultValue=''
          className={`block w-full form-select ${error && 'border-red'} ${isEmpty(value) && 'text-gray opacity-70'}`}
          aria-invalid={error}
          aria-describedby={`${name}-error`}
          {...(register ? register(name) : {})}
          {...(register ? {} : { value })}
          {...rest}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={String(option.id)} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && errorMessage && lostFocus && (
          <p id={`${name}-error`} className='el-input-error'>
            {errorMessage}
          </p>
        )}
        {!isEmpty(inWords) && lostFocus && <p className='el-input-help-text'>{inWords}</p>}
      </div>
    );
  }
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string,
  inWords: PropTypes.string,
  placeholder: PropTypes.string
};

Select.defaultProps = {
  error: undefined,
  value: undefined,
  errorMessage: '',
  inWords: '',
  placeholder: 'Please select one option'
};
