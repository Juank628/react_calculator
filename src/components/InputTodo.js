import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className='form-container'>
        <input
          type='text'
          className='input-text'
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onChange}
          name='title'
        />
        <button type='submit' className='input-submit'>
          Submit
        </button>
      </form>
    );
  }
}
export default InputTodo;
