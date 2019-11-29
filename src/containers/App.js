import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from '../components/Scroll'
// import {robots} from '../robots'
import 'tachyons';
import './App.css';


class App extends Component {

  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({robots: users}))
  }

  onSearchChange = (e) => {

    this.setState({searchField: e.target.value,});

  };

  render() {
      const {robots, searchField} = this.state;
      const filterRobots = robots.filter(robots => {
          return robots.name.toLowerCase().includes(searchField.toLowerCase())
      });

      if(robots.length === 0) {
          return <h1 className='pa3 tc'>Loading</h1>
      } else {

          return (
              <div className='tc'>
                  <h1 className='f1'>RoboFriends</h1>
                  <SearchBox searchChange={this.onSearchChange} />

                  <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filterRobots }/>
                    </ErrorBoundry>
                  </Scroll>
              </div>
          );
      }

  }
}

export default App;
