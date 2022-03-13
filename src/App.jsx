import React, { useState, useEffect} from 'react';
import './App.css';
import ActionAreaMovieCard from './components/MovieCard';
import { getPopularMoviesFetch } from './fetches/fetches'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {movies?.map((movie, index) => (
         <Grid item xs={2} sm={4} md={4} key={index}>
        <ActionAreaMovieCard movieProps={movie}/>
        </Grid>
      ))} 
      </Grid>
    </Box>
    </div>
  );
}

export default App;
