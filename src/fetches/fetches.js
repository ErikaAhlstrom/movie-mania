import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY

const url = axios.create({ baseURL: 'https://api.themoviedb.org/3/movie'});

/**********************************
 * MOVIE FETCHES GOES HERE
**********************************/

export const getPopularMoviesByPageIdFetch = (pageId) => url.get(`/popular?api_key=${apiKey}&language=en-US&page=${pageId}`);
export const getMovieByIdFetch = (movieId) => url.get(`/${movieId}?api_key=${apiKey}&language=en-US`);

/**********************************
 * USER FETCHES GOES HERE
**********************************/