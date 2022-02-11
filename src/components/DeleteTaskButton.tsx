import React from "react";
import '../styles/button.css';

class DeleteTaskButton extends React.Component {

    removeTaskFromState = () => {
        console.log(this.props.id);
        this.props.deleteTask(this.props.id);
    }

    render(): React.ReactNode {
        return(
            <button onClick={this.removeTaskFromState} className="button">Удалить задачу</button>
        )
    }
}

export default DeleteTaskButton;