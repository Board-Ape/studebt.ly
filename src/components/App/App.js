import React, { Component } from 'react';
import './App.css';
import SchoolCardContainer from '../../containers/SchoolCardContainer/SchoolCardContainer'
import Landing from '../../components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <SchoolCardContainer />
      </div>
    );
  }
}

export default App;
