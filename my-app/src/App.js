import React, { Component } from 'react';

import './App.css';
import tasks from './samples/tasks.json';
import Tasks from '../src/components/Tasks';
class App extends Component {
state = {
  tasks: tasks
}

  render() {
    return <div>
      <Tasks tasks={this.state.tasks} />
    
    </div>
  }
}
export default App;
