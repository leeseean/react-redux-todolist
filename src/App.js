import React, { Component } from 'react';
import './css/App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
