import React from 'react'
import { connect } from 'react-redux'


class FirstForm extends React.Component {


    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input type="number" placeholder="rate" />
                <button> NEXT </button>
            </div>

        )
    }
}


export default connect()(FirstForm)