import React, { Component } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import '../styles/button.css'
import '../styles/list-item.css'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markTask: (id: string) => void
   changeEditState: () => void
}

class TaskItem extends Component<TaskItemProps> {
   deleteTaskButton = () => {
      this.props.deleteTask(this.props.task.id)
   }

   checkTask = () => {
      this.props.markTask(this.props.task.id)
   }

   editItem = () => {
      this.props.changeEditState()
   }

   render() {
      return (
         <>
            <span className="task-text">{this.props.task.description}</span>
            <button onClick={this.deleteTaskButton} className="button">
               Удалить
            </button>
            {!this.props.task.isDone && (
               <>
                  <button onClick={this.checkTask} className="button">
                     Отметить как выполнено
                  </button>
                  <button onClick={this.editItem} className="button">
                     Изменить
                  </button>
               </>
            )}
         </>
      )
   }
}

export default TaskItem
