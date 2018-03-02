import React, { Component } from 'react';

import PaperItem from './PaperItem';

class Papers extends Component {
  deletePaper(id){
    this.props.onDelete(id);
  }

  render() {
    let PaperItems;
    if(this.props.Papers){
      PaperItems = this.props.Papers.map(Paper => {
        //console.log(Paper);
        return (
          <PaperItem onDelete={this.deletePaper.bind(this)} key={Paper.id} Paper={Paper} />
        );
      });
    }
    return (
      <div className="Papers">
        <h3>Latest Papers</h3>
        {PaperItems}
      </div>
    );
  }
}

Papers.propTypes = {
  Papers: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Papers;
