import logo from './logo.svg';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faDownload, faUser);

class Navbar extends Component {
  addRandom(texto){
    alert('clic en addRandom' + texto);
  }
  render() {
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
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
            <a className="navbar-item" onClick={()=>this.addRandom('click')}>
              Add Random Contact
            </a>
            <a className="navbar-item" onClick={()=>this.addRandom('Sort by name')}>
              Sort by name
            </a>
            <a className="navbar-item" onClick={()=>this.addRandom('Sort by popularity')}>
              Sort by popularity
            </a>
          </div>          
        </div>
      </nav>
    );
  }
}

export default Navbar;
