import React, { useState, useEffect} from 'react';
import './App.css';
import { getPopularMoviesFetch } from './fetches/fetches'
import Box from '@mui/material/Box';
import ResponsiveAppBar from './components/Header';
import CircularProgress from '@mui/material/CircularProgress';
import MoviesPage from './pages/MoviesPage';
import Button from '@mui/material/Button';



function App() {

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

/*   useEffect(() => {
    getPopularMovies()
  }, []) */
  
  async function getPopularMovies() {
    const getPopularoviesResponse = await getPopularMoviesFetch()
    setMovies(getPopularoviesResponse.data.results);
  }

  function handleClick() {
    setIsLoading(true)
    setTimeout(() => {getPopularMovies()}, 2000);
  }

  return (
    <>
    <ResponsiveAppBar />
    <Box sx={{m:4, display: "flex", justifyContent: "center", flexDirection: 'column'}} className="App"> 
    { !movies && !isLoading &&
    <Button 
      onClick={() => {
        handleClick()
      }}
      variant="contained">
      Get Movies
    </Button>
    }

    {isLoading && !movies &&
    <Box sx={{display: "flex", justifyContent: "center", p:5}}>
      <CircularProgress/>
    </Box>}
    {movies &&
     <MoviesPage moviesProps={movies}/>
    }
    
    </Box>
    </>
  );
}

export default App;

