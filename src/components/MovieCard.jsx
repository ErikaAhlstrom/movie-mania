import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaMovieCard({movieProps}) {
    return (
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={`https://image.tmdb.org/t/p/w500${movieProps.poster_path}`}
            alt={movieProps.original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {movieProps.original_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movieProps.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }