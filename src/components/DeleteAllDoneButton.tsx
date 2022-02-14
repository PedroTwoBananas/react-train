import React from "react";
import PropsDeleteAllDoneInterface from "../interfaces/PropsDeleteAllDoneInterface";
import StateComponentsInterface from "../interfaces/StateComponentsInterface";

class DeleteAllDoneButton extends React.Component<PropsDeleteAllDoneInterface, StateComponentsInterface> {
    render(): React.ReactNode {
        return (
        <button onClick={this.props.deleteAllDone} className="button">Удалить выполненное</button>
    )
    }
}

export default DeleteAllDoneButton;