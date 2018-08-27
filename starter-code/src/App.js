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
      data: contacts,
    };
  }

  DeleteOne(cual){    
    var oldData = this.state.data;
    var oldData = oldData.splice(cual,1);
    this.setState({
      oldData,
    })
  }

  AddRandom(){    
    this.setState({
      data: [            
        ...this.state.data,
        this.getObjetoRandom(contacts)
      ]
    })
  }

  getObjetoRandom(data){    
    return this.state.data[Math.floor(Math.random() * this.state.data.length)];
  }

  SortByName(){
    const byName = this.state.data;
    byName.sort(function(a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.setState({ data: byName });
  }

  SortByPopularity(){
    const byPopularity = this.state.data;
    byPopularity.sort(function(a,b) {
      return a.popularity - b.popularity;
    });
    this.setState({ data: byPopularity });
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
            <Table 
              data={this.state.data}
              deleteOne       = {this.DeleteOne.bind(this)}>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
