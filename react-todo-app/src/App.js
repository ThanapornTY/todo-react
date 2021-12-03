import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <InputTodo/>
        <TodoList/>
        
      </div>
  
      
    );
  }
}

export default App;
