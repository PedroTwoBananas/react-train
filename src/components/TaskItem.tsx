import React from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";

class TaskItem extends React.Component {
    render(): React.ReactNode {
        return (
            <li>
                <span>{this.props.text.desc}</span>
                <DeleteTaskButton id = {this.props.text.id} deleteTask={this.props.deleteTask} />
                <EditTaskButton />
            </li>
        )
    }
}

export default TaskItem;