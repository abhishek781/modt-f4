import React from 'react';
import { useParams } from 'react-router-dom';

function WordDetailsPage() {
  const { word } = useParams();

  // Implement logic to fetch and display word details using the 'word' parameter

  return (
    <div>
      <h2>Word Details for "{word}"</h2>
      {/* Display word details here */}
    </div>
  );
}

export default WordDetailsPage;


