import React, { Component } from 'react';
import './BreedList.css';

class BreedList extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      breedImage: null,
      breed: ''
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let breeds = Object.keys(data.message).map((breed) => {
          return (
            <button key={breed} onClick={() => this.handleClick(breed)}>
              <span>{breed}</span>
            </button>
          )
        })
        this.setState({breeds: breeds})
      })
  }

  handleClick(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({breedImage: data.message, breed})
      })
  }

  render() {
    return (
      <div className="breeds">
        <div className="breed-list">
          {this.state.breeds}
        </div>
        { this.state.breed ?
          <div className="breed-image__container">
            <div className="breed-image">
              <img src={this.state.breedImage} alt="breed" />
            </div>
            <button className="refresh-image" onClick={() => this.handleClick(this.state.breed)}>Get a new picture</button>
          </div>
        : null
        }
      </div>
    );
  }
}

export default BreedList;
