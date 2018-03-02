import './App.css';

import React, { Component } from 'react';

import $ from 'jquery';
import AddPaper from './Components/AddPaper';
import Papers from './Components/Papers';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Papers: [],
    }
  }

  getPapers() {
    this.setState({
      Papers: []
    });
  }

  componentWillMount() {
    this.getPapers();
  }

  componentDidMount() {
  }

  handleAddPaper(Paper) {
    let Papers = this.state.Papers;
    Papers.push(Paper);
    this.setState({ Papers: Papers });
  }

  handleDeletePaper(id) {
    let Papers = this.state.Papers;
    let index = Papers.findIndex(x => x.id === id);
    Papers.splice(index, 1);
    this.setState({ Papers: Papers });
  }

  render() {
    return (
      <div className="App">
        <AddPaper addPaper={this.handleAddPaper.bind(this)} />
        <hr />
        <Papers Papers={this.state.Papers} onDelete={this.handleDeletePaper.bind(this)} />
      </div>
    );
  }
}

export default App;
