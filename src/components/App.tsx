import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import TaskInterface from '../interfaces/TaskInterface';


class App extends React.Component {

   state: { tasks: TaskInterface[] } = {
      tasks: []
   }

   addTask = (addedTask: TaskInterface) => {
      this.setState({tasks: [...this.state.tasks, addedTask]});
   }

   editTask = (id: string, editedText: string) => {
      this.setState({
         tasks: this.state.tasks.map((task: TaskInterface) => {
            if (task.id !== id) return task;
            return {...task, description: editedText};
         })
      });
   }

   deleteTask = (id: string) => {
      this.setState({tasks: this.state.tasks.filter((task: TaskInterface) => task.id !== id)});
   }

   deleteAllDone = () => {
      this.setState({tasks: this.state.tasks.filter((task: TaskInterface) => !task.isDone)});
   }

   markAsDone = (id: string) => {
      this.setState({
         tasks: this.state.tasks.map((task: TaskInterface) => {
            if (task.id !== id) return task;
            return {...task, isDone: !task.isDone};
         })
      })
   }

   markAllAsDone = () => {
      this.setState({
         tasks: this.state.tasks.map((task: TaskInterface) => {
            return {...task, isDone: true};
         })
      })
   }

   render() {
      return (
          <>
             <Header
                 addTask={this.addTask}
                 markAllAsDone={this.markAllAsDone}
                 deleteAllDone={this.deleteAllDone}
             />
             <TaskList
                 tasks={this.state.tasks}
                 deleteTask={this.deleteTask}
                 markAsDone={this.markAsDone}
                 editTask={this.editTask}
             />
          </>
      )
   }
}

export default React.memo(App);




