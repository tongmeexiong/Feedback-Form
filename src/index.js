import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, } from 'redux'
import logger from 'redux-logger'

const feedback = []

// {
//     feeling: '',
//     understanding: '',
//     supoort: '',
//     comments: '',

// }

// const testFormReducer = (state = feedback, action) => {
//     if (action.type === "FIRST_FORM"){
//         return {
//                  ...state,
//                   [action.name]: action.payload
//                  }
//     }
//     return state

// }

    // switch (action.type) {
    //     case 'FIRST_FORM':
    //         return  {
    //              ...state,
    //               feeling: action.payload
    //              }
    
    //     case 'SECOND_FORM':
    //         return {
    //             ...state,
    //             [action.name]: action.payload
    //         }        // case 'THIRD_FORM':
    //     //     return [...state, feedback.supoort = action.payLoad];
    //     // case 'FOURTH_FORM':
    //     //     return [...state, feedback.comments = action.payLoad];
    //     default:
    //         return state;
    // }
// }



const firstFormReducer = (state = feedback, action) => {
    if (action.type === "FEED_BACK") {
        return [...state, action.payLoad]
    }  

    return state

}

// const secondFormReducer = (state = feedback, action) => {
//     if (action.type === "SECOND_FORM") {
//         return {
//             ...state,
//             [action.name]: action.payLoad
//         }
        
//     }    
//     return state

// }

console.log('this is the feedback now ', feedback);


// const thirdFormReducer = (state = [], action) => {
//     if (action.type === 'THIRD_FORM') {
//         return [action.payLoad]
//     }
//     return state
// }

// const forthFormReducer = (state = [], action) => {
//     if (action.type === 'FOURTH_FORM') {
//         return [action.payLoad]
//     }
//     return state
// }

const storeInstance = createStore(

    combineReducers({
        // testFormReducer,
        firstFormReducer,
        // secondFormReducer
        // thirdFormReducer,
        // forthFormReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
