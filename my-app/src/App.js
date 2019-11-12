import React, { Component } from 'react';

import './App.css';
import tasks from './samples/tasks.json';
<<<<<<< HEAD
import Tasks from '../src/components/Tasks';
import TaskForm from './components/Taskform';
=======

// Components
import Tasks from './components/Tasks';
import Taskform from './components/Taskform';
>>>>>>> 3aa49347d303e5ce7227b943e5e68aa4852375c0
class App extends Component {
state = {
  tasks: tasks
}
addTask = () => {
  console.log('Adding a Task')
}

  render() {
    return <div>
<<<<<<< HEAD
    <TaskForm />
=======
      <Taskform />
>>>>>>> 3aa49347d303e5ce7227b943e5e68aa4852375c0
      <Tasks tasks={this.state.tasks} />
    
    </div>
  }
}
export default App;
