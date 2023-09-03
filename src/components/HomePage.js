import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../actions/historyActions';

function HomePage() {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchWord) {
      // Dispatch an action to add the searched word to the history
      dispatch(addToHistory(searchWord));
    }
  };

  return (
    <div>
      <h1>Word Dictionary</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      <Link to="/history">Search History</Link>
    </div>
  );
}

export default HomePage;


