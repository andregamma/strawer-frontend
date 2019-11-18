import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom'

// import { Container } from './styles';

export default class Logout extends Component {
    state = {
      navigate: false
    }

    logout = () => {
        localStorage.removeItem("userToken");
        this.setState({ navigate: true})
    }
    render() {
      const { navigate } = this.state;

      if (navigate) {
          return <Redirect to="/" push={true} />
      }

      return (
          <div onClick={this.logout} className="block px-6 py-3 leading-tight hover:bg-gray-200 cursor-pointer">
              Sair
          </div>
      )
    }
}
