import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { getMovieByIdFetch } from '../fetches/fetches'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

export function MovieDetailsPage(props) {
  const history = useHistory();
  const movie_id = props.match.params.id
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById();
}, [])

  async function getMovieById() {
    const getMovieByIdResponse = await getMovieByIdFetch(movie_id)
    setMovie(getMovieByIdResponse.data);
  }


  function handleClick() {
    history.push("/");
  }
  

  return (
    <>
    <Card sx={{ display: 'flex', m:2 }}>
        <CardContent>
          <Typography sx={{my:3}} variant="h5">
          {movie?.original_title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
          {movie?.overview}
          </Typography>
          <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <StarIcon />
            <Typography sx={{ alignItems: 'center', fontSize: '24px', p:.5 }} variant="body1" color="text.secondary">
             {movie?.vote_average}
            </Typography>
          </Box>
        </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 400}}
        image={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt="Live from space album cover"
        />
    </Card>
    <Button 
      sx={{ display: 'flex', m:2 }} 
      variant='contained' 
      onClick={() => {
        handleClick()
      }}>
      Back
    </Button>
      </>
  );
}


export default MovieDetailsPage


