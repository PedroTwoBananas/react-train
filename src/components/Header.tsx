import React from "react";
import { render } from "react-dom";
import TaskForm from "./TaskForm";
import '../styles/header.css'
import TaskInterface from '../interfaces/TaskInterface';
import PropsAddTaskInterface from '../interfaces/PropsAddTaskInterface'
import StateComponentsInterface from '../interfaces/StateComponentsInterface';


class Header extends React.Component<PropsAddTaskInterface, StateComponentsInterface> {

    render() {
        return (
            <div className="header">
                <TaskForm addTask={this.props.addTask} />
            </div>
        )
    }
}

export default Header;