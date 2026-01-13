import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await axios.get(`https://instapreps.com/api/testlist_by_subjects/12/63`);

        setData(response.data.data);
      } catch (err) {
        setError(true);
      }
    };
    getBoard();
  }, []);

  const handleClick = async (id) => {
    try {
      const response = await axios.get(`https://instapreps.com/api/testlist_by_subject/${id}`);
      console.log(response.data.data);
      setSelectedData(response.data.data);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div>
        {data.map((item) => (
          <div className='card flex flex-col' key={item.id}>
            <button onClick={() => handleClick(item.id)}>{item.name}</button>
          </div>
        ))}
      </div>
      {selectedData && (
        <div>
          <p>{selectedData.test_name}</p>
        </div>
      )}
    </>
  );
}

export default App;
