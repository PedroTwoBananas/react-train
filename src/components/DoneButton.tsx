import React from "react";

class DoneButton extends React.Component {

    markTask = () => {
        this.props.markAsDone(this.props.id);
    }

    render(): React.ReactNode {
        return(
            <button className="button" onClick={this.markTask}>Выполнено</button>
        )
    }
}

export default DoneButton;