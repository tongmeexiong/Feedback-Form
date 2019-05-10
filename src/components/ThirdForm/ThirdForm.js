import React from 'react'
import { connect } from 'react-redux'


class ThirdForm extends React.Component {


    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="number" placeholder="rate" />
                <button> NEXT </button>
            </div>

        )
    }
}


export default connect()(ThirdForm)