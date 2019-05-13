import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, } from 'redux'
import logger from 'redux-logger'

const feedback = 

{
    feeling: '',
    understanding: '',
    support: '',
    comments: '',

}

const firstFormReducer = (state = feedback, action) => {
    if (action.type === "FEED_BACK") {
        return {...state,
             [action.name]: action.payLoad}
        
    }  
    else if (action.type === 'CLEAR_ALL') {
        return {
            feeling: '',
            understanding: '',
            support: '',
            comments: ''
        }

    }
        return state

    }

    


const storeInstance = createStore(

    combineReducers({
        firstFormReducer
       
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
