import './App.css';

import React, { Component } from 'react';

import $ from 'jquery';
import AddPaper from './Components/AddPaper';
import Papers from './Components/Papers';
import Todos from './Components/Todos';
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Papers: [],
      todos:[]
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getPapers(){
    this.setState({Papers: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  componentWillMount(){
    this.getPapers();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddPaper(Paper){
    let Papers = this.state.Papers;
    Papers.push(Paper);
    this.setState({Papers:Papers});
  }

  handleDeletePaper(id){
    let Papers = this.state.Papers;
    let index = Papers.findIndex(x => x.id === id);
    Papers.splice(index, 1);
    this.setState({Papers:Papers});
  }

  render() {
    return (
      <div className="App">
        <AddPaper addPaper={this.handleAddPaper.bind(this)} />
        <Papers Papers={this.state.Papers} onDelete={this.handleDeletePaper.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
