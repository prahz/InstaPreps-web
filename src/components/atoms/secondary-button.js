import React from 'react';
import PropTypes from 'prop-types';

export const SecondaryButton = React.memo(
  ({ text, type, loading, onClick, children, hideTextOnLoading, className }) => {
    return (
      <button
        type={type}
        disabled={loading}
        aria-disabled={loading}
        className={`btn btn-secondary group ${className}`}
        {...(type === 'submit' ? {} : (onClick && { onClick }) || {})}
      >
        {children}
        {loading && (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 animate-ping'
              fill='none'
              viewBox='0 0 24 24'
              aria-hidden={!loading}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              />
            </svg>
          </>
        )}
        {hideTextOnLoading && loading ? '' : <span className='ml-2'>{text}</span>}
      </button>
    );
  }
);

SecondaryButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  hideTextOnLoading: PropTypes.bool,
  className: PropTypes.string
};

SecondaryButton.defaultProps = {
  type: 'button',
  loading: false,
  onClick: undefined,
  children: null,
  hideTextOnLoading: false,
  className: ''
};
