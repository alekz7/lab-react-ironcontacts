import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Table from './Table';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="title is-1">IronContacts</h1>
        </header>
        <Navbar></Navbar>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Table></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
