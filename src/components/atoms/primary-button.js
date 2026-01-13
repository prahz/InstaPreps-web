import React from 'react';
import PropTypes from 'prop-types';

export const PrimaryButton = React.memo(({ type, disabled, onClick, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className='transition-transform ease-out transform btn btn-primary group hover:-translate-y-1 hover:shadow-btn-shadow'
      {...(type === 'submit' ? {} : (onClick && { onClick }) || {})}
    >
      {children}
    </button>
  );
});

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  disabled: PropTypes.bool
};

PrimaryButton.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false
};
