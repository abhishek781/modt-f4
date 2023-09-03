import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import WordDetailsPage from './components/WordDetailsPage';

function App() {
  return (
<Router>
      <div>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage />} /> {/* Use element prop */}
          <Route path="/history" element={<HistoryPage />} /> {/* Use element prop */}
          <Route path="/word/:word" element={<WordDetailsPage />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


