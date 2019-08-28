import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Articles from './components/Articles'
import Navigation from './components/Navigation';
import Article from './components/Article'
import ErrorPage from './utils/ErrorPage'


class App extends React.Component {
  state = {
    userLoggedIn: "jessjelly"
  }


  render() {
    const { userLoggedIn } = this.state
    return (
      <div className="App" >
        <Navigation userLoggedIn={userLoggedIn} />
        <Router>
          <Articles path='/articles' />
          <Article path='/articles/:article_id' loggedInAs={userLoggedIn} />
          <ErrorPage default />


        </Router>
      </div>
    );
  }
}

export default App;
