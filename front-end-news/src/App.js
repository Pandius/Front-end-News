import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Header from './components/Header'
import Articles from './components/Articles'

class App extends React.Component {
  state = {
    userLoggedIn: "jessjelly"
  }


  render() {
    const { userLoggedIn } = this.state
    return (
      <div className="App" >
        <Header userLoggedIn={userLoggedIn} />
        <Router>

          <Articles path='/articles' />
        </Router>
      </div>
    );
  }
}

export default App;
