import React from "react";
import { render } from "react-dom";
import TaskForm from "./TaskForm";
import AllDoneButton from "./AllDoneButton";
import DeleteAllDoneButton from "./DeleteAllDoneButton";
import '../styles/header.css'

class Header extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="header">
                <TaskForm getTask={this.props.getTask} />
                <AllDoneButton />
                <DeleteAllDoneButton />
            </div>
        )
    }
}

export default Header;