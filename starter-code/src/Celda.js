import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrashAlt);

class Celda extends Component {  

  render(index) {
    return (
      <tr>
        <th>
          <figure className="image is-64x64">
            <img className="is-rounded" src={this.props.picture} />
          </figure>
        </th>
        <th>{this.props.name}</th>
        <th>{this.props.popularity}</th>
        <th>
          <div className="field is-grouped">
            <p className="control">
              <button 
                  className="bd-tw-button button is-danger"                  
                  onClick={() => this.props.accion(this.props.index)}>
                <span className="icon"> <FontAwesomeIcon icon="trash-alt" /> </span>
                <span> Delete </span>
              </button>
            </p>
          </div>
        </th>
      </tr>
    );
  }
}

export default Celda;
