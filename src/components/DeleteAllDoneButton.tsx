import React, {Component, PureComponent} from 'react'
import '../styles/button.css'

interface DeleteAllDoneButtonProps {
   deleteAllChecked: () => void
}

class DeleteAllDoneButton extends PureComponent<DeleteAllDoneButtonProps> {
   render() {
      return (
         <button onClick={this.props.deleteAllChecked} className="button">
            Удалить выполненное
         </button>
      )
   }
}

export default DeleteAllDoneButton;
