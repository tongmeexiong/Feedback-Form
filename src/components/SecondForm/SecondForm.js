import React from 'react'
import { connect } from 'react-redux'


class SecondForm extends React.Component {

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
            </div>

        )
    }
}


export default connect()(SecondForm)