import React from 'react';
import PropTypes from 'prop-types';

const SelectListItem = ({ id, name, selected, onSelect }) => {
  return (
    <li
      id={id}
      className={`relative px-3 py-2 text-opacity-30 text-sm font-medium cursor-pointer select-none text-gray group hover:text-secondary ${
        selected && 'text-opacity-100'
      }`}
      role='option'
      aria-selected={selected}
      onClick={() => onSelect({ id, name })}
    >
      <div className='flex'>
        <span className='truncate'>{name}</span>
      </div>
    </li>
  );
};

SelectListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

SelectListItem.defaultProps = {};

export default SelectListItem;
