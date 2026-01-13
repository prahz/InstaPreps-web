import React from 'react';
import PropTypes from 'prop-types';

export const PROGRESS_COLORS = {
  loading: 'bg-secondary',
  error: 'bg-error',
  success: 'bg-green'
};

export const PROGRESS_STATES = {
  error: 'error',
  loading: 'loading',
  success: 'success'
};

const ProgressBar = ({ state, percentage }) => {
  console.log(state);
  return (
    <div className='flex h-0.7 absolute right-1.5 bottom-0 left-1.5  overflow-hidden text-xs rounded bg-secondary-light'>
      <div
        className={`flex flex-col justify-center w-6/12 text-center text-white transition-all duration-1000 ease-out shadow-none opacity-100 ${PROGRESS_COLORS[state]} whitespace-nowrap`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  state: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {};

export default ProgressBar;
