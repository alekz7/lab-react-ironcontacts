import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrashAlt);

class Celda extends Component {
  render() {
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
              <a className="bd-tw-button button is-danger" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                <span className="icon"> <FontAwesomeIcon icon="trash-alt" /> </span>
                <span> Delete </span>
              </a>
            </p>
          </div>
        </th>
      </tr>
    );
  }
}

export default Celda;
