import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Articles from './components/Articles'
import Navigation from './components/Navigation';
import Article from './components/Article'
import ErrorPage from './utils/ErrorPage'
import Home from './components/Home';
import Header from './components/Header';


class App extends React.Component {
  state = {
    userLoggedIn: "jessjelly"
  }


  render() {
    const { userLoggedIn } = this.state
    return (
      <div className="App" >
        <Navigation userLoggedIn={userLoggedIn} />
        <Header />
        <Router>
          <Home path='/' />
          <Articles path='/articles' />
          <Articles path='/articles/topic/:topic' userLoggedIn={userLoggedIn} />
          <Article path='/articles/:article_id' userLoggedIn={userLoggedIn} />
          <ErrorPage default />


        </Router>
      </div>
    );
  }
}

export default App;
