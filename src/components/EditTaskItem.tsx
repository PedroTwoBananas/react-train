import React, { Component } from 'react'
import '../styles/list-item.css'

interface EditTaskItemProps {
   confirmChanges: (value: string) => void
}

interface EditTaskItemState {
   value: string
}

class EditTaskItem extends Component<EditTaskItemProps, EditTaskItemState> {
   state = {
      value: '',
   }

   getInput = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({ value: e.currentTarget.value })
   }

   changeText = () => {
      this.props.confirmChanges(this.state.value)
      this.setState({ value: '' })
   }

   render() {
      return (
         <>
            <input
               value={this.state.value}
               type="text"
               onChange={this.getInput}
            />
            <button
               disabled={!this.state.value}
               className="button"
               onClick={this.changeText}
            >
               Переписать
            </button>
         </>
      )
   }
}

export default EditTaskItem
