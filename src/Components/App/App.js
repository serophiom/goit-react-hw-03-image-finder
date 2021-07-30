import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import SearchFetch from '../SearchFetch/SearchFetch';

export default class App extends Component {
  state = {
    imageName: ''
  }

handleSearchSubmit = imageName => {
  this.setState({ imageName });
}

  render() {
    return (
      <>
      <Searchbar onSubmit={this.handleSearchSubmit} />
      <SearchFetch imageName={this.state.imageName} />
      </>
  );
  }
};