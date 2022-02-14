import React from "react";
import PropsAddTaskInterface from "../interfaces/PropsAddTaskInterface";
import PropsAllDoneInterface from "../interfaces/PropsAllDoneInterface";
import StateComponentsInterface from "../interfaces/StateComponentsInterface";
import '../styles/button.css'
class AllDoneButton extends React.Component<PropsAllDoneInterface, StateComponentsInterface> {

    render(): React.ReactNode {
        return(
            <button onClick={this.props.markAllAsDone} className="button">Отметить всё как выполнено</button>
        )
    }
}

export default AllDoneButton;