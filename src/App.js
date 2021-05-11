import React, { Component } from 'react';
import './App.css';
//import { Information } from './information';
import NewsList from './News-LIst';
import Header from './Components/Header';
import { Route, Switch } from 'react-router-dom';
//import HomePage from './pages/homepage';
import WorldNews from './pages/world-news';
import TechnologyNews from './pages/technology-news';
import BusinessNews from './pages/business-news';
import EntertainmentNews from './pages/entertainment-news';
import HealthNews from './pages/health-news';
import ScienceNews from './pages/science-news';
import SportsNews from './pages/sports-news';
import SignIn from './Components/SignIn/signin';
//import { auth } from './firebase.utils';
//import { throwStatement } from '@babel/types';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Switch>
            <Route exact path='/' component={WorldNews} />
            <Route path='/technology' component={TechnologyNews} />
            <Route path='/business' component={BusinessNews} />
            <Route path='/entertainment' component={EntertainmentNews} />
            <Route path='/health' component={HealthNews} />
            <Route path='/science' component={ScienceNews} />
            <Route path='/sports' component={SportsNews} />
          </Switch>
        </div>
      </>
    );
  }

}

export default App;
