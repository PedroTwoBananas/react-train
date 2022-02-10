import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import TaskList from './TaskList';
import Task from '../interfaces/Task';


interface State {
    state: { tasks: Array<Task> }
}

class App  extends React.Component implements State {
    state = {
        tasks: []
    }
    render(): React.ReactNode {
        return (
            <>
                <Header />
                <TaskList />
            </>


        )

    }
}

export default App;




