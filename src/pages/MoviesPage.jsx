import React, { useEffect, useState } from 'react';
import { getPopularMoviesFetch } from '../fetches/fetches'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ActionAreaMovieCard from '../components/MovieCard';
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
      getPopularMoviesFetch(1),
      getPopularMoviesFetch(2),
      getPopularMoviesFetch(3),
      getPopularMoviesFetch(4),
      getPopularMoviesFetch(5)
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
    setTimeout(() => { setAllIsLoaded(true)}, 1000);
    getPopularMovies()
  }

  return (
    <Box sx={{m:4, display: "flex", justifyContent: "center", flexDirection: 'column'}} className="App"> 
    { !allIsLoaded && !isLoading &&
    <Button 
      onClick={() => {
        handleClick()
      }}
      variant="contained">
      Get Movies
    </Button>
    }

    {isLoading && !allIsLoaded &&
    <Box sx={{display: "flex", justifyContent: "center", p:5}}>
      <CircularProgress/>
    </Box>}
    {allIsLoaded &&
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {moviesPage1?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <ActionAreaMovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage2?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <ActionAreaMovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage3?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <ActionAreaMovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage4?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <ActionAreaMovieCard movieProps={movie}/>
          </Grid>
          ))} 
          {moviesPage5?.map((movie, index) => (
          <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
              <ActionAreaMovieCard movieProps={movie}/>
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


