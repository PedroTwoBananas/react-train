import React from "react";
import '../styles/button.css'

interface DeleteAllDoneProps {
   deleteAllDone: () => void;
}

class DeleteAllDoneButton extends React.Component<DeleteAllDoneProps> {
   render() {
      return (
          <button
              onClick={this.props.deleteAllDone}
              className="button"
          >
             Удалить выполненное
          </button>
      )
   }
}

export default React.memo(DeleteAllDoneButton);