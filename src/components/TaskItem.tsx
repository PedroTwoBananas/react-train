import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import '../styles/button.css'
import '../styles/list-item.css'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markAsDone: (id: string) => void
   isEdit: boolean
   changeEditState: () => void
}

class TaskItem extends React.Component<TaskItemProps> {
   deleteTaskButton = () => {
      this.props.deleteTask(this.props.task.id)
   }

   markAsDoneButton = () => {
      this.props.markAsDone(this.props.task.id)
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
                  <button onClick={this.markAsDoneButton} className="button">
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

export default React.memo(TaskItem)
