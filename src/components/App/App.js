import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from "react-redux"
import FirstForm from '../SecondForm/SecondForm'
import ReviewForm from '../ReviewForm/ReviewForm'
import Header from '../Header/Header'
import SecondForm from '../FirstForm/FirstForm'
import ThirdForm from '../ThirdForm/ThirdForm'
import FourthForm from '../FourthForm/FourthForm'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route exact path='/' component={FirstForm} />
          <Route exact path='/second' component={SecondForm} />
          <Route exact path='/third' component={ThirdForm} />
          <Route exact path='/third' component={FourthForm} />
          <br />
          <ReviewForm />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
