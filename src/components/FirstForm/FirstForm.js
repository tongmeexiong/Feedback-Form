import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../ReviewForm/ReviewForm'



class FirstForm extends React.Component {

    state={
        feeling: ''
    }

    handleInput = (event) =>{
        let number = parseInt(event.target.value)
        this.setState({
            feeling: number
        })
        // this.props.dispatch({ type: 'FIRST_FORM', pageLoad: this.state.inputField }) 
    }    

    sendData =(event)=>{
        event.preventDefault();
        this.props.dispatch({ type: "FEED_BACK", payLoad:  this.state.feeling, name: 'feeling' })
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
                <ReviewForm />
            </div>

        )
    }
}


export default connect()(FirstForm)