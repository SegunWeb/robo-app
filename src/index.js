import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {searchRobots, requestRobots} from './reducers';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';

const logger = createLogger();
const rootReduser = combineReducers ({searchRobots, requestRobots});
const store = createStore(rootReduser, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
