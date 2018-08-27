import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Celda from './Celda';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.splice(0,5),
    };
  }   

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
          {this.props.data.map((celebrity, i) =>{
            return <Celda {...celebrity} index={i} accion={this.props.deleteOne}/>
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
