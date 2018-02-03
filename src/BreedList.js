import React, { Component } from 'react';

class BreedList extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      breedImage: null
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
        this.setState({breedImage: data.message})
      })
  }

  render() {
    return (
      <div className="Breeds">
        <div className="breed-list">
          {this.state.breeds}
        </div>
        <img src={this.state.breedImage} alt="breed" className="breed-image" />
      </div>
    );
  }
}

export default BreedList;
