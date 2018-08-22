import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Celda from './Celda';

class Table extends Component {

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Picture">Picture</abbr></th>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Popularity">Popularity</abbr></th>
          </tr>
        </thead>
        <tbody>
          {this.pintaCelda(0)}
          {this.pintaCelda(1)}
          {this.pintaCelda(2)}
          {this.pintaCelda(3)}
          {this.pintaCelda(4)}
        </tbody>
      </table>
    );
  }

  pintaCelda(i) {
    return (
      <Celda
        picture={this.props.data[i].picture}
        name={this.props.data[i].name}
        popularity={this.props.data[i].popularity}
      />
    );
  }
}

export default Table;
