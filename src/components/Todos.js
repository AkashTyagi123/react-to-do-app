import React, { Component } from 'react';
import Todo from './Todo';


class Todos extends Component {
  render() {
    return (
      this.props.todos.map((todo)=>{
      return <Todo 
        key={todo.id}
        id={todo.id}
        title={todo.title}
        complete={todo.completed}
        markComplete={this.props.markComplete.bind(this,todo.id)}
        delItem={this.props.delItem.bind(this,todo.id)}
      />
      })
    );
  }
}

export default Todos;
