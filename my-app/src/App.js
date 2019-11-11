import React, { Component } from 'react';

import './App.css';
import tasks from './samples/tasks.json';

// Components
import Tasks from './components/Tasks';
import Taskform from './components/Taskform';
class App extends Component {
state = {
  tasks: tasks
}

  render() {
    return <div>
      <Taskform />
      <Tasks tasks={this.state.tasks} />
    
    </div>
  }
}
export default App;
