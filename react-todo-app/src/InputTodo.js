import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import { render } from "@testing-library/react";

class InputTodo extends Component {
    state = {
        title: "",
    }
    onChange = c => {
        this.setState({
            [c.target.name]: c.target.value,
        })
    }

    handleSubmit = c => {
        c.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        }else{
            alert("ยังไม่ได้พิมพ์อะไรลงไปเลยเว้ย!!!")
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                type = "text"
                className = "input-textlist"
                placeholder= "พิมพ์สิ่งที่อยากทำ.."
                name="title"
                onChange={this.onChange}
                />
                <button className="submit">Submit</button>
                <div className="select">
                    <select className="filter-todo" name="Todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        )
    }  


}

export default InputTodo;

