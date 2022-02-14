import React from "react";
import TaskItem from "./TaskItem";
import { render } from "react-dom";
import TaskInterface from "../interfaces/TaskInterface";

interface PropsInterface {
    tasks: TaskInterface[],
    deleteTask:(id: string) => void,
    markAsDone:(id: string)=> void
}

interface StateInterface {

}

class TaskList extends React.Component<PropsInterface, StateInterface> {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((task) => {
                        return <TaskItem key={task.id} task={task} deleteTask={this.props.deleteTask} markAsDone={this.props.markAsDone} />
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskList;