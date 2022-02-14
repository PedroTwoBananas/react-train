import React from 'react';
import Header from './Header';
import TaskList from './TaskList';


interface TaskInterface {
    id: string,
    desc: string | null,
    isDone: boolean
}

interface State {
    tasks: Array<TaskInterface>
}


class App extends React.Component <State> {

    state: State = {
        tasks: []
    }


    addTask = (AddedTask: TaskInterface) => {
        const tasks = this.state.tasks;
        tasks.push(AddedTask);
        this.setState({ tasks: tasks });
    }

    deleteTask = (id: string) => {
        this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
    }

    // deleteAllDoneTasks = () => {
    //     this.setState({tasks: this.state.tasks.filter(task => task.id !== true)})
    // }

    markAsDone = (id: string) => {
        console.log(id);
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    task.isDone = true;
                }
                return this.state.tasks;
            })
        })
    }

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

    render() {
        return (
            <>
                <Header getTask={this.addTask} /*markAllAsDone={this.markAllAsDone} deleteAllDoneTasks={this.deleteAllDoneTasks}*/ tasks={this.state.tasks}/>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} markAsDone={this.markAsDone} />
            </>
        )
    }
}

export default App;




