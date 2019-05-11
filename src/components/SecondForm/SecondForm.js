import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../ReviewForm/ReviewForm'



class SecondForm extends React.Component {

    state = {
        understanding: ''
    }

    handleInput = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SECOND_FORM', payLoad: this.state })
        this.props.history.push('/third')
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.sendData}>
                    <h1>How well are you understanding the content?</h1>
                    <input onChange={this.handleInput} type="number" placeholder="rate" />
                    <button type="submit"> NEXT </button>
                </form>
                <ReviewForm />
            </div>

        )
    }
}


export default connect()(SecondForm)