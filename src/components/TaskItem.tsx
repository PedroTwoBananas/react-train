import React from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import DoneButton from "./DoneButton";

class TaskItem extends React.Component {

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
    }

    markAsDone = () => {
        console.log(this.props.task.id);
        this.props.markAsDone(this.props.task.id)
    }

    render() {
        return (
            <li>
                <span>{this.props.task.desc}</span>
                <button onClick={this.deleteTask} className="button">Удалить</button>
                <button className="button">Изменить</button>
                <button onClick={this.markAsDone} className="button">Отметить как выполнено</button>
            </li>
        )
    }
}

export default TaskItem;