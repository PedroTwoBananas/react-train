import React from "react";
import TaskInterface from "../interfaces/TaskInterface";
import '../styles/list-item.css';
import '../styles/button.css';

interface PropsInterface {
    task: TaskInterface,
    key: string,
    deleteTask: (id: string) => void,
    markAsDone: (id: string) => void,
    editTask: (id: string, editedText: string) => void
}

interface StateInterface {

}

class TaskItem extends React.Component<PropsInterface, StateInterface> {

    state: { isEdit: boolean, value: string } = {
        isEdit: false,
        value: '',
    }

    deleteTaskButton = () => {
        this.props.deleteTask(this.props.task.id)
    }

    markAsDoneButton = () => {
        console.log(this.props.task.id);
        this.props.markAsDone(this.props.task.id)
    }

    changeEditState = () => {
        this.setState({ isEdit: !this.state.isEdit })
    }

    getInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value })
    }

    changeTask = () => {
        this.props.editTask(this.props.task.id, this.state.value);
        this.setState({ isEdit: !this.state.isEdit });
        this.setState({ value: '' });
    }

    render() {
        return (

            !this.state.isEdit
                ?
                <li className="list-item">
                    <span className="task-text">{this.props.task.desc}</span>
                    <button onClick={this.deleteTaskButton} className="button">Удалить</button>
                    {!this.props.task.isDone
                        ?
                        <>
                            <button onClick={this.markAsDoneButton} className="button">Отметить как выполнено</button>
                            <button onClick={this.changeEditState} className="button">Изменить</button>
                        </>
                        : null}


                </li>


                : <li className="list-item">
                    <input value={this.state.value} type="text" onChange={this.getInput} />
                    <button className="button" onClick={this.changeTask}>Переписать</button>
                </li>

        )



    }
}

export default TaskItem;