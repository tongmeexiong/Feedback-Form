import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../ReviewForm/ReviewForm'



class ThirdForm extends React.Component {
    state = {
        support: ''
    }

    handleInput = (event) => {
        let number = parseInt(event.target.value)

        this.setState({
            support: number
        })
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: "FEED_BACK", payLoad: this.state.support, name: 'support' })
        this.props.history.push('/fourth')
    }



    render() {
        return (
            <div>
                <form onSubmit={this.sendData}>
                <h1>How well are you being supported?</h1>
                <input onChange={this.handleInput} type="number" placeholder="rate" />
                <button type="submit"> NEXT </button>
                </form>
                <ReviewForm />

            </div>

        )
    }
}


export default connect()(ThirdForm)