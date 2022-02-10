import React from "react";
import '../styles/button.css';

class EditTaskButton extends React.Component {
    render(): React.ReactNode {
        return(
            <button className="button">Изменить задачу</button>
        )
    }
}

export default EditTaskButton;