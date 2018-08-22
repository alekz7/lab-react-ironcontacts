import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar   from './Navbar';
import Table    from './Table';
import contacts from './contacts.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: contacts.splice(0, 5),
    };
  }

  AddRandom(){
    alert("Agregando aleatorioamente");
    console.log("Agregando aleatorioamente");
    const newData = contacts.splice(0, 8);
    this.setState({ data: newData });
  }

  SortByName(){
    alert("Sort by name");
    console.log("Sort by name");
    const newData = contacts.splice(0, 8);
    this.setState({ data: newData });
  }

  SortByPopularity(){
    alert("Sort by popularity");
    console.log("Sort by popularity");
    const newData = contacts.splice(0, 8);
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title is-1">IronContacts</h1>
        </header>
          <Navbar
            addRandom         = {this.AddRandom.bind(this)}
            sortByName        = {this.SortByName.bind(this)}
            sortByPopularity  = {this.SortByPopularity.bind(this)}>
          </Navbar>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Table data={this.state.data}></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
