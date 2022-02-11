import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import TaskList from './TaskList';
import TaskInterface from '../interfaces/TaskInterface';

interface State {
    state: { tasks: Array<TaskInterface> }
}

class App extends React.Component implements State {

    state = {
        tasks: []
    }

    getTask = (task: TaskInterface) => {
        const tasks = this.state.tasks;
        tasks.push(task);
        this.setState({ tasks: tasks });
    }

    deleteTask = (id) => {
        this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
    }

    // deleteAllDoneTasks = () => {
    //     this.setState({tasks: this.state.tasks.filter(task => task.id !== true)})
    // }

    // markAsDone = (id) => {
    //     this.setState({
    //         tasks: this.state.tasks.map(task => {
    //             if (task.id === id) {
    //                 task.isDone = true;
    //             }
    //             return this.state.tasks;
    //         })
    //     })
    // }

    // markAllAsDone = () => {
    //     this.setState({
    //         tasks: this.state.tasks.map(task => {
    //             if(task.isDone === false) {
    //                 task.isDone = true;
    //             }
    //             return this.state.tasks
    //         })
    //     })
    // }

    render(): React.ReactNode {
        return (
            <>
                <Header getTask={this.getTask} /*markAllAsDone={this.markAllAsDone} deleteAllDoneTasks={this.deleteAllDoneTasks}*/ tasks={this.state.tasks}/>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} markAsDone={this.markAsDone} />
            </>
        )
    }
}

export default App;




