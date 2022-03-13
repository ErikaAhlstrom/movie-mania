import React, { useState, useEffect} from 'react';
import './App.css';
import { getPopularMoviesFetch } from './fetches/fetches'


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
  }, [])
  
  async function getPopularMovies() {
    const getPopularoviesResponse = await getPopularMoviesFetch()
    setMovies(getPopularoviesResponse.data.results);
    // console.log(getPopularoviesResponse.data.results)
  }

  return (
    <div className="App"> 
       {movies?.map(movie => (
         <>
        <p>{movie?.original_title}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.original_title} />
        </>
      ))} 
    </div>
  );
}

export default App;
