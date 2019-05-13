import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class LastReviewForm extends React.Component {

sendCompletedData = (event) =>{
    event.preventDefault();
    axios({
        method: 'POST',
        url: '/feedback',
        data: this.props.feedBack
    }).then((response) => {
               console.log('POST', response);
        this.props.history.push('/thankyou')

    }).catch((err) => {
        alert(err)
    })
}





    render() {
        console.log('TEST', this.props.firstForm);
        
        return (

            <div>
                <h1>YOU ARE DONE!REVIEW YOUR FEEDBACK! </h1>
                <form onSubmit={this.sendCompletedData}>
                <ul>
                        <li>Feeling: {this.props.feedBack.feeling}</li>
                        <li>Understanding: {this.props.feedBack.understanding}</li>
                        <li>Support: {this.props.feedBack.support}</li>
                        <li>Comments: {this.props.feedBack.comments}</li>
                    
                </ul>

                <button type="submit">Complete</button>
                </form>
            </div>
        );
    }
}

const mapToReduxState = (reduxState) => {
    return {
       
        feedBack: reduxState.firstFormReducer,
       
    }
}

export default connect(mapToReduxState)(LastReviewForm)