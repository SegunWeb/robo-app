import React, {Component} from 'react';
import {connect} from "react-redux";
import { Header, Puffs, Heading, Loading } from 'arwes';
import '../App.css';
import SearchPanel from "../componetns/SearchPanel";
import ListFriend from "../componetns/ListFriend";
import ErrorBoundry from "../componetns/ErrorBoundry";

import { setSearchField, requestRobots} from "../actions";



class App extends Component {

    // state = {
    //     robots: [],
    //     searchfield: ''
    // };

    componentDidMount() {
        this.props.onRequestRobots()
    }

    // onSearchChange = (e) => {
    //     this.setState({
    //         searchfield: e.target.value
    //     })
    // };


  render() {

      // const {robots} = this.state;
      const {searchField, onSearchChange, robots, isPending, error} = this.props;
      const filterRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase())
      });

      return (
        <div className="app-wrapp">
              <Header animate className='header'>
                  <Puffs>
                      <Heading className='h1-pruffs' node='h1'>Robofriends</Heading>
                  </Puffs>
                  {/*<SearchPanel  searchChange={this.onSearchChange}/>*/}
                  <SearchPanel  searchChange={onSearchChange}/>
              </Header>

              {
                  isPending ?
                      <Loading animate /> :
                      <ErrorBoundry status={error}>
                          <ListFriend robots={filterRobots}/>
                      </ErrorBoundry>
              }
          </div>
      );
  }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error ,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
