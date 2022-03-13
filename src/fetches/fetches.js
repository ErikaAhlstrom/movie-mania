import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY

const url = axios.create({ baseURL: 'https://api.themoviedb.org/3'});

/**********************************
 * MOVIE FETCHES GOES HERE
**********************************/

export const getPopularMoviesFetch = () => url.get(`/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
export const getMovieByIdFetch = (movieId) => url.get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`);

/**********************************
 * USER FETCHES GOES HERE
**********************************/