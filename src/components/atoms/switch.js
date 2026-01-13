import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ onChange, enabled }) => {
  return (
    <button
      type='button'
      onClick={() => onChange(!enabled)}
      className={`
        ${
          enabled ? 'bg-secondary' : 'bg-gray-200'
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0`}
    >
      <span className='sr-only'>Use setting</span>
      <span
        className={`
          ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow-switch-shadow  transform ring-0 transition ease-in-out duration-200`}
      >
        <span
          className={`
            ${
              enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'
            } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden={enabled}
        />
        <span
          className={`${
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden={enabled}
        />
      </span>
    </button>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired
};

Switch.defaultProps = {};

export default Switch;
