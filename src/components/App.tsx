import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import TaskInterface from '../interfaces/TaskInterface';


class App extends React.Component {

    state: { tasks: TaskInterface[] } = {
        tasks: []
    }

    addTask = (addedTask: TaskInterface) => {
        this.setState({ tasks: [...this.state.tasks, addedTask] });
    }

    editTask = (id: string, editedText: string) => {
        this.setState({ tasks: this.state.tasks.map((task: TaskInterface) => {
            if(task.id === id) {
                task.desc = editedText
            }
            return task
        })})
    }

    deleteTask = (id: string) => {
        this.setState({ tasks: this.state.tasks.filter((task: TaskInterface) => task.id !== id) });
    }

    deleteAllDone = () => {
        this.setState({ tasks: this.state.tasks.filter((task: TaskInterface) => task.isDone !== true)})
    }

    markAsDone = (id: string) => {
        this.setState({
            tasks: this.state.tasks.map((task: TaskInterface) => {
                if (task.id === id) {
                    task.isDone = !task.isDone;
                }
                return task;
            })
        })
    }

    markAllAsDone = () => {
        this.setState({
            tasks: this.state.tasks.map((task: TaskInterface) => {
                task.isDone = true
                return task
            })
        })
    }

    render() {
        return (
            <>
                <Header addTask={this.addTask} markAllAsDone={this.markAllAsDone} deleteAllDone={this.deleteAllDone} />
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} markAsDone={this.markAsDone} editTask={this.editTask} />
            </>
        )
    }
}

export default App;




