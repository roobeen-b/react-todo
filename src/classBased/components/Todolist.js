import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class Todolist extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <Todoitem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteProps={this.props.deleteProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}
