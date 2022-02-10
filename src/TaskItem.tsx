import React from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";

class TaskItem extends React.Component {
    render(): React.ReactNode {
        return(
            <div>
                <span></span>
                <DeleteTaskButton/>
                <EditTaskButton/>
            </div>
        )
    }
}

export default TaskItem;