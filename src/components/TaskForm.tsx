import React, { Ref } from "react";
import TaskInterface from "../interfaces/TaskInterface";
import uniqid from 'uniqid';
import '../styles/button.css';
import PropsAddTaskInterface from '../interfaces/PropsAddTaskInterface';
import StateComponentsInterface from '../interfaces/StateComponentsInterface';
import '../styles/form-block.css'


class AddTaskForm extends React.Component <PropsAddTaskInterface, StateComponentsInterface> {

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
        this.props.addTask(textItem);
        this.setState({value: ''})
    }


    render() {

        return (
            <div className="form-block">
                <input value ={this.state.value} onChange={this.getInput} type="text" placeholder="Введите задачу" />
                <button onClick={this.handleClick} className="button">Добавить</button>
                
            </div>
        )
    }
}

export default AddTaskForm;