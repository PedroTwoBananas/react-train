import React from "react";
import TaskItem from "./TaskItem";
import TaskInterface from "../interfaces/TaskInterface";
import ComponentState from "../interfaces/ComponentState";

interface TaskListProps {
   tasks: TaskInterface[],
   deleteTask: (id: string) => void,
   markAsDone: (id: string) => void,
   editTask: (id: string, editedText: string) => void
}

class TaskList extends React.Component<TaskListProps, ComponentState> {

   render() {
      return (
          <div>
             <ul>
                {this.props.tasks.map((task) => {
                   return <TaskItem key={task.id} task={task} deleteTask={this.props.deleteTask}
                                    markAsDone={this.props.markAsDone} editTask={this.props.editTask}/>
                })}
             </ul>
          </div>
      )
   }
}

export default TaskList;