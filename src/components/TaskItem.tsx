import React from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";

class TaskItem extends React.Component {
    render(): React.ReactNode {
        return(
            <li>
                <span>{this.props.text.desc}</span>
                <DeleteTaskButton/>
                <EditTaskButton/>
            </li>
        )
    }
}

export default TaskItem;