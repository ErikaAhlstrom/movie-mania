import React from 'react';
import { useHistory } from "react-router-dom";
import {Card, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function ActionAreaMovieCard({movieProps}) {
  const history = useHistory();
  function handleClick() {
    history.push(`/movies/${movieProps.id}`);
  }
  
    return (
      <Card>
        <CardActionArea onClick={() => {
          handleClick()
        }}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${movieProps.poster_path}`}
            alt={movieProps.original_title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {movieProps.original_title}
            </Typography>
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <StarIcon />
            <Typography sx={{ alignItems: 'center', fontSize: '24px', p:.5 }} variant="body1" color="text.secondary">
             {movieProps.vote_average}
            </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }