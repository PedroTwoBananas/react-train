import React from "react";
import '../styles/button.css';

class DeleteAllDoneButton extends React.Component {

    deleteAllDone = () => {
        this.props.deleteAllDoneTasks();
    }

render(): React.ReactNode {
    return(
        <button onClick={this.deleteAllDone} className="button">Удалить выполненное</button>
    )
}
}

export default DeleteAllDoneButton;