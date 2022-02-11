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
        // const tasks = this.state.tasks;
        this.setState({tasks: this.state.tasks.filter(task => task.id !== id )});
    }

    // markAsDone = (task) = {
    //     let tasks = this.state.tasks;

    // }

    render(): React.ReactNode {
        return (
            <>
                <Header getTask={this.getTask} />
                <TaskList Tasks = {this.state.tasks} deleteTask = {this.deleteTask} />
            </>
        )
    }
}

export default App;




