import React, { Component } from "react";
import { Link } from "react-router-dom";
import './logincheck.css';


class LoginCheck extends Component {

  state = {
    id: window.localStorage.getItem('id') || '',
  };

  componentDidMount() {
    this.loggedIn();
  };

  loggedIn = () => {

    if (this.state.id) {
      window.location.href = '/feed';
    } else {
      window.location.href = '/login';
    }
  };

  render() {

    return (
      <div className="spinner">
      <i className="fa fa-spinner fa-spin fa-2x fa-fw"></i>
      <span className="sr-only">Loading...</span>
      </div>

    );
  }

}

export default LoginCheck;
