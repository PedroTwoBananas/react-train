import React from "react";
import TaskInterface from "../interfaces/TaskInterface";

interface PropsInterface {
    task: TaskInterface,
    key: string,
    deleteTask:(id: string) => void,
    markAsDone:(id: string)=> void
}

interface StateInterface {

}

class TaskItem extends React.Component<PropsInterface, StateInterface> {

    deleteTaskButton = () => {
        this.props.deleteTask(this.props.task.id)
    }

    markAsDoneButton = () => {
        console.log(this.props.task.id);
        this.props.markAsDone(this.props.task.id)
    }

    render() {
        return (
            <li>
                <span>{this.props.task.desc}</span>
                <button onClick={this.deleteTaskButton} className="button">Удалить</button>
                <button className="button">Изменить</button>
                <button onClick={this.markAsDoneButton} className="button">Отметить как выполнено</button>
            </li>
        )
    }
}

export default TaskItem;