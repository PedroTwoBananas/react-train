import React, { Component } from 'react'
import Header from './Header'
import TaskList from './TaskList'
import TaskInterface from '../interfaces/TaskInterface'

interface AppState {
   tasks: TaskInterface[]
}

class App extends Component<{}, AppState> {
   state = {
      tasks: [],
   }

   addTask = (addedTask: TaskInterface) => {
      this.setState({ tasks: [...this.state.tasks, addedTask] })
   }

   editTask = (id: string, editedText: string) => {
      this.setState({
         tasks: this.state.tasks.map((task: TaskInterface) => {
            if (task.id !== id) return task
            return { ...task, description: editedText }
         }),
      })
   }

   deleteTask = (id: string) => {
      this.setState({
         tasks: this.state.tasks.filter(
            (task: TaskInterface) => task.id !== id
         ),
      })
   }

   deleteAllChecked = () => {
      this.setState({
         tasks: this.state.tasks.filter((task: TaskInterface) => !task.isDone),
      })
   }

   markTask = (id: string) => {
      this.setState({
         tasks: this.state.tasks.map((task: TaskInterface) => {
            if (task.id !== id) return task
            return { ...task, isDone: true }
         }),
      })
   }

   markAllTasks = () => {
      this.setState({
         tasks: this.state.tasks.map((task: TaskInterface) => {
            return { ...task, isDone: true }
         }),
      })
   }

   render() {
      return (
         <>
            <Header
               addTask={this.addTask}
               markAllTasks={this.markAllTasks}
               deleteAllChecked={this.deleteAllChecked}
            />
            <TaskList
               tasks={this.state.tasks}
               deleteTask={this.deleteTask}
               markTask={this.markTask}
               editTask={this.editTask}
            />
         </>
      )
   }
}

export default App
