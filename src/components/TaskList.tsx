import React from "react";
import TaskItem from "./TaskItem";
import { render } from "react-dom";

class TaskList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => {
                        return <TaskItem key={task.id} task={task} deleteTask={this.props.deleteTask} markAsDone={this.props.markAsDone} />
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskList;