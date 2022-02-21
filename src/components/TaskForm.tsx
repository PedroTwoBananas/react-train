import React from "react";
import uniqid from 'uniqid';
import ComponentState from '../interfaces/ComponentState';
import TaskInterface from "../interfaces/TaskInterface";
import '../styles/form-block.css'
import '../styles/button.css';

interface AddTaskProps {
   addTask: (addedTask: TaskInterface)=> void,
}

class AddTaskForm extends React.Component <AddTaskProps, ComponentState> {

   state = {
      value: ''
   }

   getInput = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({value: e.currentTarget.value})
   }

   handleClick = () => {
      const textItem = {
         id: uniqid(),
         description: this.state.value,
         isDone: false
      }
      this.props.addTask(textItem);
      this.setState({value: ''})
   }


   render() {

      return (
          <div className="form-block">
             <input value={this.state.value} onChange={this.getInput} type="text" placeholder="Введите задачу"/>
             <button disabled={!this.state.value} onClick={this.handleClick} className="button">Добавить</button>
          </div>
      )
   }
}

export default AddTaskForm;