import './App.css';

import React, { Component } from 'react';

import AddCorpus from './Components/AddCorpus';
import Decision from './Constants';
import Papers from './Components/Papers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Papers: [],
      renderAddCorpus: true,
      includes: 0,
      maybes: 0,
      excludes: 0
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleAddCorpus(corpus) {
    this.setState({ Papers: corpus });
  }

  handleDecisionChange(id) {
    let Papers = this.state.Papers;
    let includes = 0;
    let excludes = 0;
    let maybes = 0;
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
        case Decision.NONE:
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

  handleCorpusUnmount() {
    this.setState({ renderAddCorpus: false });
  }

  getPercent(count) {
    return "(" + (this.state.Papers.length === 0 ? 0 : (count / this.state.Papers.length) * 100) + "%)";
  }

  render() {
    return (
      <div className="App">
        {this.state.renderAddCorpus &&
          <AddCorpus addCorpus={this.handleAddCorpus.bind(this)} unmountMe={this.handleCorpusUnmount.bind(this)} />
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
