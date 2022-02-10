import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import TaskList from './TaskList';


class App extends React.Component {
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




