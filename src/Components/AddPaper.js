import React, { Component } from 'react';

import {parseCorpus} from './CorpusParser'
import uuid from 'uuid';

class AddPaper extends Component {
  constructor() {
    super();
    this.state = {
      newPaper: {}
    }
  }

  handleSubmit(e) {
    let papers = parseCorpus(this.refs.rawtext.value);
    let paper = papers[0];
    paper.id = uuid.v4();
    paper.category = "research";
    this.setState({
      newPaper: paper
    }, function () {
      this.props.addPaper(this.state.newPaper);
    });
    e.preventDefault();
  }
  
  unmount() {
    this.props.unmountMe();
  } 
  
  render() {
    // let categoryOptions = this.props.categories.map(category => {
    //   return <option key={category} value={category}>{category}</option>
    // });
    return (
      <div>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <h3>Add Paper</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Text Here</label><br />
            <textarea type="text" cols="40" rows="5" ref="rawtext"></textarea>
          </div>
          <br />
          <input type="submit" value="Add Paper" />
          <br />
        </form>
      </div>
    );
  }
}

AddPaper.propTypes = {
  categories: React.PropTypes.array,
  addPaper: React.PropTypes.func
}

export default AddPaper;
