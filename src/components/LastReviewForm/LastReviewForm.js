import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class LastReviewForm extends React.Component {

sendCompletedData = (event) =>{
    event.preventDefault();
    axios({
        method: 'POST',
        url: '/feedback',
        data: {feeling: this.props.firstForm.feeling }
    }).then((response) => {
               console.log('POST', response);

    }).catch((err) => {
        alert(err)
    })
}




//     event.preventDefault();
//     axios.post ({
//         method: 'POST',
//         url: '/feedback',
//         data: { feeling: this.props.firstForm.payLoad.feeling},
//         // {understanding: this.props.secondForm },
//         // { support: this.props.thirdForm },
//         // { comments: this.props.fourthForm }
            
//     })
//     .then((response)=>{
//         console.log('POST', response);
        
//     })
//     .catch((err)=>{
//         console.log('POST NOT WORKING', err);
//     })
// }




    render() {
        console.log('TEST', this.props.firstForm);
        
        return (

            <div>
                <h1>YOU ARE DONE!REVIEW YOUR FEEDBACK! </h1>
                <form onSubmit={this.sendCompletedData}>
                <ul>
                        {/* {this.props.reduxState.testFormReducer.map((data, i) => {
                            return (
                                <li key={i}>Feelings: {data.feeling}
                                Understanding: {data.understanding}
                                Support: {data.support}
                                Comments: {data.comment}</li>
                            )
                        })} */}
                    {this.props.firstForm.map((first, i) => {
                        return (
                            <li key={i}>Feelings: {[first.feeling]}</li>
                        )
                    })}
                    {this.props.secondForm.map((second, i) => {
                        return (
                            <li key= { i }>Understanding:{second.understanding}</li>
                        )
                    })}
                    {this.props.thirdForm.map((third,i) => {
                        return (
                            <li key={i}>Support:{third.support}</li>
                        )
                    })}
                    {this.props.fourthForm.map((fourth, i) => {
                        return (
                            <li key={i}>Comments:{fourth.comments}</li>
                        )
                    })}

                </ul>

                <button type="submit">Complete</button>
                </form>
            </div>
        );
    }
}

const mapToReduxState = (reduxState) => {
    return {
        // reduxState
        firstForm: reduxState.firstFormReducer,
        secondForm: reduxState.secondFormReducer,
        thirdForm: reduxState.thirdFormReducer,
        fourthForm: reduxState.forthFormReducer
    }
}

export default connect(mapToReduxState)(LastReviewForm)