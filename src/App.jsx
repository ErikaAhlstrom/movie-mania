import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MoviesPage from './pages/MoviesPage';
import ResponsiveAppBar from './components/Header';
import MovieDetailsPage from './pages/MovieDetailsPage';



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

