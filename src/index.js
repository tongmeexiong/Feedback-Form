import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'
import logger from 'redux-logger'

const firstFormReducer = (state = [], action) => {
    if (action.type === 'FIRST_FORM'){
        return action.payLoad.inputField
    }
    return state
}
const secondFormReducer = (state = [], action) => {
    return state
}
const thirdFormReducer = (state = [], action) => {
    return state
}
const forthFormReducer = (state = [], action) => {
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
