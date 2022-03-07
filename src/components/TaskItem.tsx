import React, { Component } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import '../styles/button.css'
import '../styles/list-item.css'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markTask: (id: string) => void
   changeTask: () => void
}

class TaskItem extends Component<TaskItemProps> {
   clickToDelete = () => {
      this.props.deleteTask(this.props.task.id)
   }

   clickToMark = () => {
      this.props.markTask(this.props.task.id)
   }

   clickToChange = () => {
      this.props.changeTask()
   }

   render() {
      return (
         <>
            <span className="task-text">{this.props.task.description}</span>
            <button onClick={this.clickToDelete} className="button">
               Удалить
            </button>
            {!this.props.task.isDone && (
               <>
                  <button onClick={this.clickToMark} className="button">
                     Отметить как выполнено
                  </button>
                  <button onClick={this.clickToMark} className="button">
                     Изменить
                  </button>
               </>
            )}
         </>
      )
   }
}

export default TaskItem
