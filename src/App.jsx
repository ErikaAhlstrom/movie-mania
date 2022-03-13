import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MoviesPage from './pages/MoviesPage';
import ResponsiveAppBar from './components/Header';
import MovieDetailsPage from './pages/MovieDetailsPage';

// TODO
/**********************************
* Fix so user don't have to click the button again when going back from detail page
* Refactor to get the the code more DRY in MoviesPage
* fix so CardActionArea acts lik a react Link, remove useHistory, not accessible
**********************************/

function App() {

  return (
    <>
    <ResponsiveAppBar />
    <Switch>
      <Route path="/movies/:id" component={MovieDetailsPage}>
      </Route>
      <Route exact path="/" component={MoviesPage}>
      </Route>
    </Switch>
    </>
  );
}

export default App;

