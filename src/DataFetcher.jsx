import React, { useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // Replace with your API endpoint
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Image and Attributes Fetching Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((catData, index) => (
            <div key={index}>
              <img
                src={catData.url}
                alt={`Cat Image ${index + 1}`}
                width="300"
                height="200"
              />
              <div>
                <strong>ID:</strong> {catData.id}
              </div>
              <div>
                <strong>URL:</strong> {catData.url}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
