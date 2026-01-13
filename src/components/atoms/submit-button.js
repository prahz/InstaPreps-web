/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'components/atoms/primary-button';

export const SubmitButton = React.memo(({ type, text, loading, children, onClick }) => {
  return (
    <PrimaryButton type={type} disabled={loading} children={children} onClick={onClick}>
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
      {!loading && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x-description='Heroicon name: solid/chevron-right'
          width='16'
          fill='currentColor'
          height='16'
          viewBox='0 0 16 16'
          aria-hidden={loading}
          className='mr-2 bg-white rounded-full text-primary'
        >
          <g fill='none' fillRule='evenodd'>
            <g>
              <g transform='translate(-17 -17) translate(17 17)'>
                <circle cx='8' cy='8' r='8' />
                <path stroke='currentColor' strokeLinecap='round' strokeWidth='2' d='M7 5L10 8 7 11' />
              </g>
            </g>
          </g>
        </svg>
      )}
      <span className=''>{text}</span>
    </PrimaryButton>
  );
});

SubmitButton.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.string,
  onClick: PropTypes.func
};

SubmitButton.defaultProps = {
  loading: false,
  children: null,
  type: 'submit',
  onClick: undefined
};
