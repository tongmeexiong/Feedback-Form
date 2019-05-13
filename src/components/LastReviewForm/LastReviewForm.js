import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';


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
        alert('You did not fill out the entire form!', err)
        this.props.history.push('/')

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

                    <Button variant="contained" color="secondary" className={Button} type="submit">Complete</Button>

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