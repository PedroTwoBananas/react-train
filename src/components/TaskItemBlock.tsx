import React from "react";
import TaskInterface from "../interfaces/TaskInterface";
import TaskItem from "../components/TaskItem"
import EditTaskItem from "./EditTaskItem";

interface TaskItemBlockProps {
   task: TaskInterface;
   deleteTask: (id: string) => void;
   markAsDone: (id: string) => void;
   editTask: (id: string, editedText: string) => void;
}

class TaskItemBlock extends React.Component<TaskItemBlockProps> {

   state: { isEdit: boolean } = {
      isEdit: false,
   }

   changeEditState = () => {
      this.setState({isEdit: !this.state.isEdit});
   }

   changeEdit = (value: string) => {
      this.props.editTask(this.props.task.id, value);
      this.setState({...this.state, isEdit: !this.state.isEdit});
   }

   render() {
      return (
          !this.state.isEdit
              ?
              <TaskItem
                  task={this.props.task}
                  deleteTask={this.props.deleteTask}
                  markAsDone={this.props.markAsDone}
                  changeEditState={this.changeEditState}
                  isEdit={this.state.isEdit}
              />
              :
              <EditTaskItem
                  changeEdit={this.changeEdit}
                  task={this.props.task}
                  isEdit={this.state.isEdit}
              />
      )
   }
}

export default React.memo(TaskItemBlock);