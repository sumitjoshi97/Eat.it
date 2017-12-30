import React, {Component} from 'react';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import logo from './logo.svg'; import './App.css';
import Header from './Header';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        {/* navbar and router component */}
        <Header/>
        <Main/>

      </div>

    );
  }
}

export default App;
