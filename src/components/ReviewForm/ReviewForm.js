import React from 'react';
import Button from '@material-ui/core/Button';
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
              

                </ul>       

                <Button variant="outlined" disabled className={Button}>INCOMPLETE</Button>
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