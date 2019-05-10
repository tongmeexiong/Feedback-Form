import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const firstReducer = (state = [], type) => {
    return state
}

const storeInstance = createStore(

    combineReducers({
        firstReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
