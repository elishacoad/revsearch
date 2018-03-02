import React, { Component } from 'react';

import parseCorpus from './CorpusParser'
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

  render() {
    // let categoryOptions = this.props.categories.map(category => {
    //   return <option key={category} value={category}>{category}</option>
    // });
    return (
      <div>
        <h3>Add Paper</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Text Here</label><br />
            <input type="text" ref="rawtext" />
          </div>
          <br />
          <input type="submit" value="Submit" />
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
