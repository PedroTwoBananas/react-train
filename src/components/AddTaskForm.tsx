import React from "react";
import '../styles/button.css';

class AddTaskForm extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <input type="text" placeholder="Введите задачу" />
                <button className="button">Добавить</button>
            </div>
        )
    }
}

export default AddTaskForm;