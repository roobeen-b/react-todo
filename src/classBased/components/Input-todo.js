import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Enter valid task");
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-container">
        <input
          type="text"
          value={this.state.title}
          placeholder="Add Todo..."
          onChange={this.onChange}
          name="title"
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
