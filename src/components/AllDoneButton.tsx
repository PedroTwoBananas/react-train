import React from "react";
import '../styles/button.css';

class AllDoneButton extends React.Component {

    markAll = () => {
        this.props.markAllAsDone();
    }

render(): React.ReactNode {
    return(
        <button onClick={this.markAll} className="button">Отметить все как выполнено</button>
    )
}
}

export default AllDoneButton;