import React, { Component } from 'react';
import BreedList from './BreedList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">{'Welcome to the Dog List!'}</h1>
        </header>
        <BreedList />
      </div>
    );
  }
}

export default App;
