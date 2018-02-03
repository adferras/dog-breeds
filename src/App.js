import React, { Component } from 'react';
import BreedList from './BreedList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{'Welcome to the Dog List!'}</h1>
        </header>
        <BreedList />
      </div>
    );
  }
}

export default App;
