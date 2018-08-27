import logo from './logo.svg';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import NavItem   from './navigation/NavItem';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <NavItem accion={this.props.addRandom}        description="Add Random Contact"/>
            <NavItem accion={this.props.sortByName}       description="Sort by name"/>
            <NavItem accion={this.props.sortByPopularity} description="Sort by popularity"/>            
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
