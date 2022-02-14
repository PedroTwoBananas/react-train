import React from "react";
import { render } from "react-dom";
import TaskForm from "./TaskForm";
import '../styles/header.css'
import TaskInterface from '../interfaces/TaskInterface';
import PropsAddTaskInterface from '../interfaces/PropsAddTaskInterface'
import StateComponentsInterface from '../interfaces/StateComponentsInterface';
import PropsAllDoneInterface from "../interfaces/PropsAllDoneInterface";
import AllDoneButton from "./AllDoneButton";

class Header extends React.Component<PropsAddTaskInterface, PropsAllDoneInterface, StateComponentsInterface> {

    render() {
        return (
            <div className="header">
                <TaskForm addTask={this.props.addTask} />
                <AllDoneButton markAllAsDone={this.props.markAllAsDone}/>
            </div>
        )
    }
}

export default Header;