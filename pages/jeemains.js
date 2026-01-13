import React from 'react';
import Header from 'src/components/header';
import VerticalSidebar from 'src/components/VerticalSidebar';

const PercentileMarks = () => {
  const data = [
    { percentile: '99+', marks: '175+' },
    { percentile: '90+', marks: '77-174' },
    { percentile: '80+', marks: '55-76' },
    { percentile: '70+', marks: '43-54' },
    { percentile: '66+', marks: '1-42' }
  ];

  return (
    <>
      <div className='lg:w-[90%] w-[95%] m-auto lg:mt-4 mt-2'>
        {/* <Header /> */}
        <VerticalSidebar/>
      </div>

      <div>
        <p className='lg:text-4xl text-3xl text-indigo  lg:w-max-md lg:px-7 px-1  lg:mt-8  mt-4 '>
          JEE Main Percentile to Marks
        </p>
        <table
          className=' lg:ml-8 mt-8 lg:w-[50%] w-[90%] '
          style={{
            borderCollapse: 'collapse',
            textAlign: 'center'
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Percentile</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Marks (out of 300)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.percentile}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=' lg:w-[90%] w-[95%]'>
        <p className='lg:text-3xl text-2xl text-indigo lg:mt-8 mt-4 lg:px-7 px-1 '>
          Is 80 percentile in JEE Mains good?
        </p>
        <p className='lg:text-lg text-lg lg:mt-5 mt-4 lg px-7 px-2'>
          80 percentile in JEE Mains is considered average, especially for candidates belonging to general category. Top
          NITs admission for higher percentile. Therefore, candidates are advised to atleast 90-95 percentile in JEE
          Main. However, 80 percentile is still good for applicants from reserved catergories. Previous year's
          qualifying percentile foe SC,ST canditates was 60.0923182 and 46.6975840, respectively. or OBC_Nacl, the JEE
          Main cutoff percentile was 79.6757881.{' '}
        </p>
      </div>
    </>
  );
};

export default PercentileMarks;
