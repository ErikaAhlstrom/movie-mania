import React, { useState, useEffect} from 'react';
import './App.css';
import { getPopularMoviesFetch } from '../src/fetches/fetches'


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
  }, [])
  
  async function getPopularMovies() {
    const getTop100MoviesResponse = await getPopularMoviesFetch()
    setMovies(getTop100MoviesResponse);
    console.log(getTop100MoviesResponse.data.results)
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
