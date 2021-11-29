import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import InputTodo from './InputTodo';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <InputTodo/>
        

      </div>
  
      
    );
  }
}

export default App;
