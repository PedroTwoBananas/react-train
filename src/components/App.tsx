import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import TaskList from './TaskList';

interface Task {
    id: number,
    desc: string,
    isDone: boolean
}

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




