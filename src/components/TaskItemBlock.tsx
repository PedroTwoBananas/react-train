import React, { PureComponent } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItem from '../components/TaskItem'
import EditTaskItem from './EditTaskItem'

interface TaskItemBlockProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markTask: (id: string) => void
   editTask: (id: string, editedText: string) => void
}

class TaskItemBlock extends PureComponent<TaskItemBlockProps> {
   state: { isEdit: boolean } = {
      isEdit: false,
   }

   changeTask = () => {
      this.setState({ isEdit: !this.state.isEdit })
   }

   confirmChanges = (value: string) => {
      this.props.editTask(this.props.task.id, value)
      this.setState({ ...this.state, isEdit: !this.state.isEdit })
   }

   render() {
      return !this.state.isEdit ? (
         <TaskItem
            task={this.props.task}
            deleteTask={this.props.deleteTask}
            markTask={this.props.markTask}
            changeTask={this.changeTask}
         />
      ) : (
         <EditTaskItem confirmChanges={this.confirmChanges} />
      )
   }
}

export default TaskItemBlock
