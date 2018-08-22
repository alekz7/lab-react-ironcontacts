import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class NavItem extends Component {
  render() {
    return (
      <a className="navbar-item" onClick={this.props.accion}>
        {this.props.description}
      </a>
    );
  }
}

export default NavItem;
