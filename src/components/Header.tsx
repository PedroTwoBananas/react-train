import React, { PureComponent } from 'react'
import TaskForm from './TaskForm'
import MarkAllButton from './MarkAllButton'
import DeleteAllMarkButton from './DeleteAllMarkButton'
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
            <MarkAllButton markAllTasks={this.props.markAllTasks} />
            <DeleteAllMarkButton
               deleteAllChecked={this.props.deleteAllChecked}
            />
         </div>
      )
   }
}

export default Header
