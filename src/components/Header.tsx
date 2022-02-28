import React from "react";
import TaskForm from "./TaskForm";
import '../styles/header.css'
import AllDoneButton from "./AllDoneButton";
import DeleteAllDoneButton from "./DeleteAllDoneButton";
import TaskInterface from "../interfaces/TaskInterface";

interface HeaderProps {
   addTask: (addedTask: TaskInterface) => void;
   markAllAsDone: () => void;
   deleteAllDone: () => void;
}

class Header extends React.Component<HeaderProps> {

   render() {
      return (
          <div className="header">
             <TaskForm addTask={this.props.addTask}/>
             <AllDoneButton markAllAsDone={this.props.markAllAsDone}/>
             <DeleteAllDoneButton deleteAllDone={this.props.deleteAllDone}/>
          </div>
      )
   }
}

export default React.memo(Header);