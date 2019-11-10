import React, { Component } from 'react';
// import './Task.css'
import PropTypes from 'prop-types';
class Task extends Component {


  styleCompleted(){
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'red' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none'
    }
  }
  render() {
    const { task } = this.props;
    return (
      <p style={this.styleCompleted()}>
        {task.title} - 
        {task.description} - 
        {task.done} -
        {task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}
Task.propTypes= {
  task: PropTypes.object.isRequired
}
const btnDelete ={
  fontSize: '18px',
  background: '#ea2027',
  color: '#FFF',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer',
}
export default Task;
// Export default Task <<--- recordar usar correctamente la sintaxis
