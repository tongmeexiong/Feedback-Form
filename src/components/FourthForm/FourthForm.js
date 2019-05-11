import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../ReviewForm/ReviewForm'



class FourthForm extends React.Component {
    state = {
        comments: ''
    }

    handleInput = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'FOURTH_FORM', payLoad: this.state })
        this.props.history.push('/review')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sendData}>
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.handleInput}  type="text" placeholder="comments" />
                <button type="submit"> NEXT </button>
                </form>
                <ReviewForm />

            </div>

        )
    }
}


export default connect()(FourthForm)