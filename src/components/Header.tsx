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
                <AllDoneButton /*markAllAsDone={this.props.markAllAsDone}*/ tasks={this.props.tasks}/>
                <DeleteAllDoneButton /*deleteAllDoneTasks={this.props.deleteAllDoneTasks}*/ tasks={this.props.tasks}/>
            </div>
        )
    }
}

export default Header;