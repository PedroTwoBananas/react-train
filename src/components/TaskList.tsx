import React, {Component} from 'react'
import TaskItemBlock from './TaskItemBlock'
import TaskInterface from '../interfaces/TaskInterface'
import '../styles/list-item.css'

interface TaskListProps {
   tasks: TaskInterface[]
   deleteTask: (id: string) => void
   markTask: (id: string) => void
   editTask: (id: string, editedText: string) => void
}

class TaskList extends Component<TaskListProps> {
   render() {
      return (
         <div>
            <ul>
               {this.props.tasks.map((task) => {
                  return (
                     <li key={task.id} className="list-item">
                        <TaskItemBlock
                           task={task}
                           deleteTask={this.props.deleteTask}
                           markTask={this.props.markTask}
                           editTask={this.props.editTask}
                        />
                     </li>
                  )
               })}
            </ul>
         </div>
      )
   }
}

export default TaskList;
