import React from 'react';
import { connect } from 'react-redux';

class ReviewForm extends React.Component {
    render() {
        return (

            <div>
                <h1>REVIEW YOUR FEED BACK</h1>
                <ul>
                    <ul>
                        <li>Feeling: {this.props.feedBack.feeling}</li>
                        <li>Understanding: {this.props.feedBack.understanding}</li>
                        <li>Support: {this.props.feedBack.support}</li>
                        <li>Comments: {this.props.feedBack.comments}</li>

                    </ul>
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

        feedBack: reduxState.firstFormReducer,

    }
}

export default connect(mapToReduxState) (ReviewForm)