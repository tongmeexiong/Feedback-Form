import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware,  } from 'redux'
import logger from 'redux-logger'

const firstFormReducer = (state = [], action) => {
    if (action.type === 'FIRST_FORM'){
        return action.payLoad.inputField
    }
    return state
}
const secondFormReducer = (state = [], action) => {
    if (action.type === 'SECOND_FORM') {
        return action.payLoad.inputField
    }
    return state
}

const thirdFormReducer = (state = [], action) => {
    if (action.type === 'THIRD_FORM') {
        return action.payLoad.inputField
    }
    return state
}

const forthFormReducer = (state = [], action) => {
    if (action.type === 'FOURTH_FORM') {
        return action.payLoad.inputField
    }
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
