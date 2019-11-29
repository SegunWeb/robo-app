import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
// import {robots} from '../robots'
import 'tachyons';
import './App.css';

import {setSearchField, requestRobots} from "../actions";
import {searchRobots} from "../reducers";
// import {searchRobots} from "../reducers";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
};

const mapDispatchToProps = (dispach) => {
     return {
         onSearchChange: (e) => dispach(setSearchField(e.target.value)),
         onRequstRobots: () => dispach(requestRobots())
     }
};


class App extends Component {

  // state = {
  //   robots: [],
  //   searchField: ''
  // };

  componentDidMount() {
      // fetch('https://jsonplaceholder.typicode.com/users')
      //     .then(response => response.json())
      //     .then(users => this.setState({robots: users}))

      this.props.onRequstRobots()
  }

  // onSearchChange = (e) => {
  //
  //   this.setState({searchField: e.target.value,});
  //
  // };

  render() {
      // const {robots } = this.state;
      const {searchField, onSearchChange, robots, isPending} = this.props;
      const filterRobots = robots.filter(robots => {
          return robots.name.toLowerCase().includes(searchField.toLowerCase())
      });

      return isPending ?
          <h1 className='pa3 tc'>Loading</h1> :
           (
              <div className='tc'>
                  <h1 className='f1'>RoboFriends</h1>
                  <SearchBox searchChange={onSearchChange} />

                  <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filterRobots }/>
                    </ErrorBoundry>
                  </Scroll>
              </div>
          );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
