import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from '../components/SearchBox'
import {robots} from '../robots'
import 'tachyons';

class App extends Component {

  state = {
    robots,
    searchField: ''
  };

  onSearchChange = (e) => {

    this.setState({
        searchField: e.target.value,
    });

  };

  render() {
      const {robots, searchField} = this.state;
      const filterRobots = robots.filter(robots => {
          return robots.name.toLowerCase().includes(searchField.toLowerCase())
      });

      return (
          <div className='tc'>
              <h1>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <CardList robots={ filterRobots }/>
          </div>
      );
  }
}

export default App;
