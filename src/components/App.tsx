import React from 'react';
import Header from './Header';
import TaskList from './TaskList';

interface TaskInterface {
    id?: string,
    desc?: string,
    isDone?: boolean
}

class App extends React.Component {

    state: { tasks: [] } = {
        tasks: []
    }

    addTask = (addedTask: TaskInterface) => {
        this.setState({ tasks: [...this.state.tasks, addedTask] });
    }

    deleteTask = (id: TaskInterface) => {
        this.setState({ tasks: this.state.tasks.filter((task: TaskInterface) => task.id !== id) });
    }

    markAsDone = (id: TaskInterface) => {
        this.setState({
            tasks: this.state.tasks.map((task: TaskInterface) => {
                if (task.id === id) {
                    task.isDone = !task.isDone;
                }
                return task;
            })
        })
    }

    render() {
        return (
            <>
                <Header addTask={this.addTask}  />
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} markAsDone={this.markAsDone} />
            </>
        )
    }
}

export default App;




