import React from 'react'
import { connect} from 'react-redux'


class SecondForm extends React.Component {


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