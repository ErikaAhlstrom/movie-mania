import React, { useState } from 'react';
import { getPopularMoviesFetch } from '../fetches/fetches'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ActionAreaMovieCard from '../components/MovieCard';
import Grid from '@mui/material/Grid';


const MoviesPage = () => {

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  async function getPopularMovies() {
    const getPopularoviesResponse = await getPopularMoviesFetch()
    setMovies(getPopularoviesResponse.data.results);
  }

  function handleClick() {
    setIsLoading(true)
    setTimeout(() => {getPopularMovies()}, 500);
  }
  return (
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
       <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {movies.map((movie, index) => (
       <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
           <ActionAreaMovieCard movieProps={movie}/>
       </Grid>
       ))} 
       </Grid>
   </Box>
    }
  </Box>
  )
}

export default MoviesPage


