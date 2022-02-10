import React from "react";
import '../styles/button.css';

class DeleteTaskButton extends React.Component {
    render(): React.ReactNode {
        return(
            <button className="button">Удалить задачу</button>
        )
    }
}

export default DeleteTaskButton;