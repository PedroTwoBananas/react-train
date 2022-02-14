import React from "react";
import { render } from "react-dom";
import TaskForm from "./TaskForm";
import '../styles/header.css'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <TaskForm getTask={this.props.getTask} />
            </div>
        )
    }
}

export default Header;