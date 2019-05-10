import React from 'react'
import { connect } from 'react-redux'


class FourthForm extends React.Component {


    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <input type="text" placeholder="comments" />
                <button> NEXT </button>
            </div>

        )
    }
}


export default connect()(FourthForm)