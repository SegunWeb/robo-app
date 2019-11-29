import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './containers/App';

const store = createStore(rootReducer);

ReactDOM.render(

    <App />,
    document.getElementById('root'));
