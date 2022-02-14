import React from "react";
import { render } from "react-dom";
import TaskForm from "./TaskForm";
import '../styles/header.css'
import StateComponentsInterface from '../interfaces/StateComponentsInterface';
import AllDoneButton from "./AllDoneButton";
import HeaderPropsInterface from "../interfaces/HeaderPropsInterface";
import DeleteAllDoneButton from "./DeleteAllDoneButton";

class Header extends React.Component<HeaderPropsInterface, StateComponentsInterface> {

    render() {
        return (
            <div className="header">
                <TaskForm addTask={this.props.addTask} />
                <AllDoneButton markAllAsDone={this.props.markAllAsDone}/>
                <DeleteAllDoneButton deleteAllDone={this.props.deleteAllDone}/>
            </div>
        )
    }
}

export default Header;