import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class ThankYouForm extends React.Component {

    handleHomeButton = ()=> {
        this.props.dispatch({type: 'CLEAR_ALL'})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Thank you for Submitting your Response!</h1>
                <Button onClick={this.handleHomeButton} variant="contained" color="primary" className={Button} type="submit">Leave new feedback</Button>

            </div>
        )
    }
}
export default connect()(ThankYouForm)