import React from 'react';
import { useSelector } from 'react-redux';

function HistoryPage() {
  // Access search history from Redux store
  const history = useSelector((state) => state.history);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;


