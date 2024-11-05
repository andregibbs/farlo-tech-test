import React, { useState, useEffect } from 'react';
import ShowsGrid from './components/Shows';
import { ShowHeroTitle } from './components/ShowStyles';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shows')
      .then(res => res.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="App">
      <ShowHeroTitle>Today's Deals</ShowHeroTitle>
      <ShowsGrid shows={shows} />
    </div>
  );
}

export default App;
