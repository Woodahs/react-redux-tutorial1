import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodosList {
  render() {
    console.log('this.props: ', this.props);
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
          />
        )}
      </ul>
    )
  }
}
// TodoList.propTypes
