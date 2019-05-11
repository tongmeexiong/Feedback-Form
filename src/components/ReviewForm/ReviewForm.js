import React from 'react';
import { connect } from 'react-redux';

class ReviewForm extends React.Component {
    render() {
        return (

            <div>
                <ul>
                {/* {this.props.firstFormReducer.map((first)=>{
                    return (
                    <li>first</li>
                    )
                })} */}
                </ul>                        

                <button>INCOMPLETE</button>

            </div>
        );
    }
}

const mapToReduxState = (reduxState) => {
    return {
        firstForm: reduxState.firstFormReducer,
        secondForm: reduxState.secondFormReducer,
        thirdForm: reduxState.thirdFormReducer,
        fourthForm: reduxState.forthFormReducer
    }
}

export default connect(mapToReduxState) (ReviewForm)