import React, { Component } from 'react';

import './App.css';
import tasks from './samples/tasks.json';
import Tasks from '../src/components/Tasks';
import TaskForm from './components/Taskform';
class App extends Component {
state = {
  tasks: tasks
}
addTask = () => {
  console.log('Adding a Task')
}

  render() {
    return <div>
    <TaskForm />
      <Tasks tasks={this.state.tasks} />
    
    </div>
  }
}
export default App;
