import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const MultiSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className='App'>
      <Select
        className='el-select-container'
        classNamePrefix='el-select'
        isMulti
        placeholder='Select Color'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <Select
        className='el-select-container'
        classNamePrefix='el-select'
        placeholder='Select Color'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default MultiSelect;
