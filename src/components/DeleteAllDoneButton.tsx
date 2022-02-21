import React from "react";
import ComponentState from "../interfaces/ComponentState";

interface DeleteAllDoneProps {
   deleteAllDone: () => void;
}

class DeleteAllDoneButton extends React.Component<DeleteAllDoneProps, ComponentState> {
   render() {
      return (
          <button onClick={this.props.deleteAllDone} className="button">Удалить выполненное</button>
      )
   }
}

export default DeleteAllDoneButton;