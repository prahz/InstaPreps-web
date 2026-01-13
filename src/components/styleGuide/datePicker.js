import React, { useState } from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';

const ElDatePicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker dayPlaceholder='DD' monthPlaceholder='MM' yearPlaceholder='YY' onChange={onChange} value={value} />
    </div>
  );
};
export default ElDatePicker;
