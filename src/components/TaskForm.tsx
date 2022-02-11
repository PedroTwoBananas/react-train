import React, { Ref } from "react";
import TaskInterface from "../interfaces/TaskInterface";
import uniqid from 'uniqid';


import '../styles/button.css';

class AddTaskForm extends React.Component {

    state = {
        value: ''
    }

    getInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value })
    }

    handleClick = () => {
        const textItem = {
            id: uniqid(),
            desc: this.state.value,
            isDone: false
        }
        this.props.getTask(textItem);
        this.state.value = ''
    }


    render(): React.ReactNode {

        return (
            <div>
                <input value ={this.state.value} onChange={this.getInput} type="text" placeholder="Введите задачу" />
                <button onClick={this.handleClick} className="button">Добавить</button>
            </div>
        )
    }
}

export default AddTaskForm;