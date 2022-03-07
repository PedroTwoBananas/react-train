import React, { Component, PureComponent } from 'react'
import '../styles/button.css'

interface AllDoneButtonProps {
   markAllTasks: () => void
}

class MarkAllButton extends PureComponent<AllDoneButtonProps> {
   render() {
      return (
         <button onClick={this.props.markAllTasks} className="button">
            Отметить всё как выполнено
         </button>
      )
   }
}

export default MarkAllButton