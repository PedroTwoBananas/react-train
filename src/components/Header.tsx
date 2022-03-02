import React, { PureComponent } from 'react'
import TaskForm from './TaskForm'
import AllDoneButton from './AllDoneButton'
import DeleteAllDoneButton from './DeleteAllDoneButton'
import TaskInterface from '../interfaces/TaskInterface'
import '../styles/header.css'

interface HeaderProps {
   addTask: (addedTask: TaskInterface) => void
   markAllTasks: () => void
   deleteAllChecked: () => void
}

class Header extends PureComponent<HeaderProps> {
   render() {
      return (
         <div className="header">
            <TaskForm addTask={this.props.addTask} />
            <AllDoneButton markAllTasks={this.props.markAllTasks} />
            <DeleteAllDoneButton
               deleteAllChecked={this.props.deleteAllChecked}
            />
         </div>
      )
   }
}

export default Header
