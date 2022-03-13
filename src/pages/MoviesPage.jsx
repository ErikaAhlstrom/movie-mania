
import React from 'react';
import ActionAreaMovieCard from '../components/MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const MoviesPage = ({moviesProps}) => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {moviesProps.map((movie, index) => (
        <Grid sx={{ w:"100%"}} item xs={2} sm={4} md={4} key={index}>
            <ActionAreaMovieCard movieProps={movie}/>
        </Grid>
        ))} 
        </Grid>
    </Box>
  )
}

export default MoviesPage


