import React from 'react';
import { connect } from 'react-redux';


class ThankYouForm extends React.Component {

    handleHomeButton = ()=> {
        this.props.dispatch({type: 'CLEAR_ALL'})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <p>YAY!</p>
            <button onClick={this.handleHomeButton} >Go Back!</button>
            </div>
        )
    }
}
export default connect()(ThankYouForm)