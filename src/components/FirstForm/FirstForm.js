import React from 'react'
import { connect } from 'react-redux'


class FirstForm extends React.Component {

    state={
        inputField: ''
    }

    handleInput = (event) =>{
        this.setState({
            inputField: event.target.value
        })
        // this.props.dispatch({ type: 'FIRST_FORM', pageLoad: this.state.inputField }) 
    }    

    sendData =(event)=>{
        event.preventDefault();
        this.props.dispatch({ type: 'FIRST_FORM', payLoad:  this.state })
        this.props.history.push('/second')
    }
    

    render() {
        console.log(this.state);
        
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.sendData}>
                <input onChange={this.handleInput} type="number" placeholder="rate" />
                    <button type="submit"> NEXT </button>
                </form>
            </div>

        )
    }
}


export default connect()(FirstForm)