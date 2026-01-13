import React from 'react';
import Header from 'src/components/header';
import VerticalSidebar from 'src/components/VerticalSidebar';

const RankMarksTable = () => {
  const data = [
    { rank: '1 to 101', marks: '340-285' },
    { rank: '101 to 201', marks: '280-270' },
    { rank: '201-501', marks: '265-240' },
    { rank: '501-1001', marks: '239-220' },
    { rank: '1001-1101', marks: '219-215' },
    { rank: '1101-1501', marks: '200+' },
    { rank: '1501-2001', marks: '200-190' },
    { rank: '2001-2501', marks: '190-180' },
    { rank: '2501-3001', marks: '175+' },
    { rank: '3001-3501', marks: '165+' },
    { rank: '3501-4001', marks: '85+' },
    { rank: '4001-4501', marks: '80+' },
    { rank: '4501-5001', marks: '75+' }
    // Add more rows as needed
  ];

  return (
    <>
      <div className='lg:w-[90%] w-[95%] m-auto lg:mt-4 mt-2'>
        {/* <Header /> */}
        <VerticalSidebar/>
      </div>
      <div>
        <p className='lg:text-4xl text-2xl text-indigo lg:mt-8 mt-4 lg:px-7 px-1 '>JEE Advanced 2024: Ranks vs Marks</p>
        <table
          className=' lg:w-[50%] w-[90%] lg:mt-8 mt-4 lg:ml-8 ml-4'
          style={{ borderCollapse: 'collapse', textAlign: 'center' }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rank Range</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Marks (out of 360)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.rank}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RankMarksTable;
