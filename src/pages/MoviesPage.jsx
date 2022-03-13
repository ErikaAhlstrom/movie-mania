import React, { useState } from 'react';
import { getPopularMoviesByPageIdFetch } from '../fetches/fetches'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import MovieCard from '../components/MovieCard';
import Grid from '@mui/material/Grid';

const MoviesPage = () => {

  const [moviesPage1, setMoviesPage1] = useState(null);
  const [moviesPage2, setMoviesPage2] = useState(null);
  const [moviesPage3, setMoviesPage3] = useState(null);
  const [moviesPage4, setMoviesPage4] = useState(null);
  const [moviesPage5, setMoviesPage5] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [allIsLoaded, setAllIsLoaded] = useState(false);
  
  function getPopularMovies() {
    Promise.all([
      getPopularMoviesByPageIdFetch(1),
      getPopularMoviesByPageIdFetch(2),
      getPopularMoviesByPageIdFetch(3),
      getPopularMoviesByPageIdFetch(4),
      getPopularMoviesByPageIdFetch(5)
    ]).then(allResponses => {
      setMoviesPage1(allResponses[0].data.results)
      setMoviesPage2(allResponses[1].data.results)
      setMoviesPage3(allResponses[2].data.results)  
      setMoviesPage4(allResponses[3].data.results)  
      setMoviesPage5(allResponses[4].data.results)
    })
  }

  function handleClick() {
    setIsLoading(true)
    // Setting a timeout so the CircularProgress gets its time in the spotlight for 1 sec.
    setTimeout(() => { setAllIsLoaded(true)}, 1000);
    getPopularMovies()
  }

  return (
    <Box sx={{m:4, display: "flex", justifyContent: "center", flexDirection: 'column'}} className="App"> 

   { /**********************************
     * Renders on application start
    **********************************/}

    { !allIsLoaded && !isLoading &&
    <Button 
      onClick={() => {
        handleClick()
      }}
      variant="contained">
      Get Movies
    </Button>
    }

  { /**********************************
     * Renders after button click
     * Fetching API data
    **********************************/}

    {isLoading && !allIsLoaded &&
    <Box sx={{display: "flex", justifyContent: "center", p:5}}>
      <CircularProgress/>
    </Box>}

    { /**********************************
     * Renders when all movies are loaded
    **********************************/}

    {allIsLoaded &&
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {moviesPage1?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <MovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage2?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <MovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage3?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <MovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage4?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <MovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage5?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <MovieCard movieProps={movie}/>
          </Grid>
          ))} 
        </Grid>
      </Box>
    </>
    }
  </Box>
  )
}

export default MoviesPage


