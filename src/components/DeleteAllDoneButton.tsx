import React from "react";
import '../styles/button.css';

class DeleteAllDoneButton extends React.Component {
render(): React.ReactNode {
    return(
        <button className="button">Удалить выполненное</button>
    )
}
}

export default DeleteAllDoneButton;