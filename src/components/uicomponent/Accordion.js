import React, { useState } from 'react';

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='accordion-item  accordianText  shadow-2xl '>
      <div className='accordion-title ' onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className='textIcon'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className='accordion-content accordianContent'>{content}</div>}
    </div>
  );
};
