import React from 'react';
import Radium from 'radium';
import './Todoitem.css';

const Todoitem = props => {

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.3rem 1.8rem',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    color: '#61DAFB'
  }

  const markStyle = {
    marginRight: '.5rem',
    fontSize: '1.6rem',
    color: props.todo.completed ? 'red' : '#61DAFB'
  }

  const btnStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#00000033',
    fontSize: '1.6rem',
    ':hover': {
      color: '#000',
      opacity: '.5'
    }
  }

  const titleStyle = {
    color: props.todo.completed ? 'red' : '#61DAFB',
    textDecoration: props.todo.completed ? 'line-through' : 'none'
  }

  return (
    <li style={itemStyle} className="listItem">

      <div>
        <i className="fa fa-check" style={markStyle} onClick={props.markTodoDone.bind(this, props.todo.id)}></i>
        <span style={titleStyle}>
          {props.todo.title}
        </span>
      </div>

      <div>
        <button
          style={btnStyle}
          onClick={props.deleteTodo.bind(this, props.todo.id)}>
          <i className="fa fa-times"></i>
        </button>
      </div>

    </li>
  )
}

export default Radium(Todoitem);