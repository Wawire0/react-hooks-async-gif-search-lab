import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';
import axios from 'axios';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchGifs('dolphin'); // Initial search query
  }

  fetchGifs = (query) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Giphy API key
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    axios.get(url)
      .then((response) => {
        this.setState({ gifs: response.data.data.slice(0, 3) });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleSearch = (query) => {
    this.fetchGifs(query);
  }

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

