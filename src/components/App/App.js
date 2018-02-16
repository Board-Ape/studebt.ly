import React, { Component } from 'react';
import './App.css';
import SchoolCardContainer from '../../containers/SchoolCardContainer/SchoolCardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SchoolCardContainer />
      </div>
    );
  }
}

export default App;
