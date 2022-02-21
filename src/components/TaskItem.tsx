import React from "react";
import TaskInterface from "../interfaces/TaskInterface";
import '../styles/list-item.css';
import '../styles/button.css';
import ComponentState from "../interfaces/ComponentState";

interface TaskItemProps {
   task: TaskInterface,
   key: string,
   deleteTask: (id: string) => void,
   markAsDone: (id: string) => void,
   editTask: (id: string, editedText: string) => void
}

class TaskItem extends React.Component<TaskItemProps, ComponentState> {

   state: { isEdit: boolean, value: string } = {
      isEdit: false,
      value: '',
   }

   deleteTaskButton = () => {
      this.props.deleteTask(this.props.task.id)
   }

   markAsDoneButton = () => {
      console.log(this.props.task.id);
      this.props.markAsDone(this.props.task.id)
   }

   changeEditState = () => {
      this.setState({isEdit: !this.state.isEdit})
   }

   getInput = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({value: e.currentTarget.value})
   }

   changeTask = () => {
      this.props.editTask(this.props.task.id, this.state.value);
      this.setState({isEdit: !this.state.isEdit});
      this.setState({value: ''});
   }

   render() {
      return (
          !this.state.isEdit
              ?
              <li className="list-item">
                 <span className="task-text">{this.props.task.description}</span>
                 <button onClick={this.deleteTaskButton} className="button">Удалить</button>
                 {!this.props.task.isDone
                     ?
                     <>
                        <button onClick={this.markAsDoneButton} className="button">Отметить как выполнено</button>
                        <button onClick={this.changeEditState} className="button">Изменить</button>
                     </>
                     : null}
              </li>
              :
              <li className="list-item">
                 <input value={this.state.value} type="text" onChange={this.getInput}/>
                 <button disabled={!this.state.value} className="button" onClick={this.changeTask}>Переписать</button>
              </li>
      )
   }
}

export default TaskItem;