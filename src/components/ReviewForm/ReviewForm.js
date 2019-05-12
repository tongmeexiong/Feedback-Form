import React from 'react';
import { connect } from 'react-redux';

class ReviewForm extends React.Component {
    render() {
        return (

            <div>
                <h1>REVIEW YOUR FEED BACK</h1>
                <ul>
                    {/* {this.props.reduxState.testFormReducer.map((data, i) => {
                        return (
                            <li key={i}>Feelings: {data.feeling}
                                Understanding: {data.understanding}
                                Support: {data.support}
                                Comments: {data.comment}</li>
                        )
                    })} */}
                    {/* {this.props.firstForm.map((first, i) => {
                        return (
                            <li key={i}>Feelings: {[first.feeling]}</li>
                        )
                    })}
                    {this.props.secondForm.map((second, i) => {
                        return (
                            <li key={i}>Understanding:{second.understanding}</li>
                        )
                    })}
                    {this.props.thirdForm.map((third, i) => {
                        return (
                            <li key={i}>Support:{third.support}</li>
                        )
                    })}
                    {this.props.fourthForm.map((fourth, i) => {
                        return (
                            <li key={i}>Comments:{fourth.comments}</li>
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
        reduxState
        // firstForm: reduxState.firstFormReducer,
        // secondForm: reduxState.secondFormReducer,
        // thirdForm: reduxState.thirdFormReducer,
        // fourthForm: reduxState.forthFormReducer
    }
}

export default connect(mapToReduxState) (ReviewForm)