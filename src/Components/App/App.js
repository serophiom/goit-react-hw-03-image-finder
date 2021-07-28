import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar'

export default class App extends Component {
handleSearchSubmit = imageName => {

}

  render() {
    return (
  
      <Searchbar onSubmit={this.handleSearchSubmit}/>
    
  );
  }
  
};