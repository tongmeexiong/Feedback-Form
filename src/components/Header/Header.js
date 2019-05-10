import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {


    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
        )
    }
}


export default connect()(Header)