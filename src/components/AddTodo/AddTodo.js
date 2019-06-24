import React, { Component } from 'react';
import Radium from 'radium';

class AddTodo extends Component {
  state = {
    title: '',
    textInput: React.createRef()
  }

  getTitle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = e => {
    e.preventDefault();

    if (this.state.title && isNaN(this.state.title)) {
      // add todo
      this.props.addTodo(this.state.title);

      // reset title
      this.setState({ title: '' });

      // add focus to the input
      this.state.textInput.current.focus();
    } else {
      if (!this.state.title) alert('Can not save empty todo');
      else if (!isNaN(this.state.title)) alert('This field accept text only');
    }

  }

  render() {
    return (
      <form
        style={formStyle}
        onSubmit={this.submitForm}>
        <div style={leftItemStyle}>

          <input
            style={inputStyle}
            type="text"
            name="title"
            placeholder="add a new todo ..."
            onChange={this.getTitle}
            value={this.state.title}
            ref={this.state.textInput}/>
          
        </div>

        <div>
          <input style={btnStyle} type="submit" value="Add" />
        </div>
      </form>
    )
  }
}


const formStyle = {
  display: 'flex',
  width: '50%',
  margin: '3rem auto 0',
}

const leftItemStyle = {
  flex: '0 1 100%'
}

const inputStyle = {
  width: '100%',
  padding: '.6rem 1.2rem',
  background: '#fff',
  color: '#555',
  font: 'inherit',
  borderRadius: '.4rem',
  border: '1px solid #ccc'
}

const btnStyle = {
  padding: '.6rem 1.2rem',
  background: '#fff',
  borderRadius: '.4rem',
  border: 0,
  height: '100%',
  marginLeft: '1rem',
  ':hover': {
    background: '#f5f5f5'
  }
}

export default Radium(AddTodo);
