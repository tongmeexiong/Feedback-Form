import React from 'react'
import { connect } from 'react-redux'


class ThirdForm extends React.Component {
    state = {
        inputField: ''
    }

    handleInput = (event) => {
        this.setState({
            inputField: event.target.value
        })
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'THIRD_FORM', payLoad: this.state })
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
            </div>

        )
    }
}


export default connect()(ThirdForm)