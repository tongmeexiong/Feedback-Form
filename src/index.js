import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const firstFormReducer = (state = [], type) => {
    return state
}
const secondFormReducer = (state = [], type) => {
    return state
}
const thirdFormReducer = (state = [], type) => {
    return state
}
const forthFormReducer = (state = [], type) => {
    return state
}

const storeInstance = createStore(

    combineReducers({
        firstFormReducer,
        secondFormReducer,
        thirdFormReducer,
        forthFormReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
