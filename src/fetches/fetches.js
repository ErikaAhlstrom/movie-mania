import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY

//TODO Change baseUrl
const url = axios.create({ baseURL: 'https://api.themoviedb.org/3'});

/**********************************
 * MOVIE FETCHES GOES HERE
**********************************/

export const getPopularMoviesFetch = () => url.get(`/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

/**********************************
 * USER FETCHES GOES HERE
**********************************/