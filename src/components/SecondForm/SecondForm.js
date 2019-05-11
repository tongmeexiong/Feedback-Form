import React from 'react'
import { connect} from 'react-redux'


class SecondForm extends React.Component {

    state = {
        inputField: ''
    }

    handleInput = (event) => {
        this.setState({
            inputField: event.target.value
        })
        // this.props.dispatch({ type: 'FIRST_FORM', pageLoad: this.state.inputField }) 
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'SECOND_FORM', payLoad: this.state })
        this.props.history.push('/second')
    }


    render(){
        return (
            <div>
            <h1>How well are you understanding the content?</h1>
            <input type="number" placeholder="rate" />
                <button> NEXT </button>
            </div>
           
        )
    }
}


export default connect()(SecondForm)