import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import App from './containers/App';
import {searchRobots, requestRobots} from "./redusers";
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,  requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) ;

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={createTheme()}>
            <Arwes>
                <App/>
            </Arwes>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
