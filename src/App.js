import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/auth_reducer'
import './App.css';
import router from './router'
import { withRouter } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }
  
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default withRouter(connect(null, {getUser})(App));