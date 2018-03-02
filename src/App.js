import './App.css';

import React, { Component } from 'react';

import AddPaper from './Components/AddPaper';
import Papers from './Components/Papers';

const Decision = Object.freeze({
  NONE: "none",
  INCLUDE: "include",
  MAYBE: "maybe",
  EXCLUDE: "exclude"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      Papers: [],
      renderAddPaper: true,
      includes: 0,
      maybes: 0,
      excludes: 0
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

  handleDecisionChange(id) {
    let Papers = this.state.Papers;
    // let paper = Papers.find(function(item) {
    //   return item.id === id;
    // });
    let includes = 0;
    let excludes = 0;
    let maybes = 0;
    // console.log(this.state);
    Papers.forEach(paper => {
      switch (paper.decision) {
        case Decision.INCLUDE:
          includes += 1;
          break;
        case Decision.EXCLUDE:
          excludes += 1;
          break;
        case Decision.MAYBE:
          maybes += 1;
          break;
        default:
          console.log(paper.decision + " is not a valid decision");
      }
      this.setState({
        includes: includes,
        excludes: excludes,
        maybes: maybes
      });
    });

  }

  handlePaperUnmount() {
    this.setState({ renderAddPaper: false });
  }

  getPercent(count) {
    return "(" + (this.state.Papers.length === 0 ? 0 : (count / this.state.Papers.length) * 100) + "%)";
  }

  render() {
    return (
      <div className="App">
        {this.state.renderAddPaper &&
          <AddPaper addPaper={this.handleAddPaper.bind(this)} unmountMe={this.handlePaperUnmount.bind(this)} />
        }
        <hr />
        <p>includes={this.state.includes} {this.getPercent(this.state.includes)},
           excludes={this.state.excludes} {this.getPercent(this.state.excludes)},
           maybes={this.state.maybes} {this.getPercent(this.state.maybes)}
        </p>
        <Papers Papers={this.state.Papers} onDecisionChange={this.handleDecisionChange.bind(this)} />
      </div>
    );
  }
}

export default App;
