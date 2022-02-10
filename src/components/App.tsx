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




