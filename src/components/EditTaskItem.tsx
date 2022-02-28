import React from "react";
import TaskInterface from "../interfaces/TaskInterface";
import '../styles/list-item.css';

interface EditTaskItemProps {
   task: TaskInterface,
   changeEdit: (value: string) => void
   isEdit: boolean;
}

class EditTaskItem extends React.Component<EditTaskItemProps> {

   state: { value: string } = {
      value: '',
   }

   getInput = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({value: e.currentTarget.value});
   }

   changeTask = () => {
      this.props.changeEdit(this.state.value);
      this.setState({value: ''});
   }

   render() {
      return (
          <>
             <input
                 value={this.state.value}
                 type="text"
                 onChange={this.getInput}/>
             <button
                 disabled={!this.state.value}
                 className="button"
                 onClick={this.changeTask}
             >
                Переписать
             </button>
          </>
      );
   }
}

export default React.memo(EditTaskItem);