import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import { render } from "@testing-library/react";

const InputTodo = () =>{
    return(
        <div>
            <form className="input-text">
                <input
                type="text"
                placeholder="จะทำอะไรก็ใส่มาเด้!!!"
                />
                <button className="input-submit">Submit</button>
            </form>
            
            
        </div>
    );
    
}

export default InputTodo;

