import React from "react";
import '../styles/button.css'
class AllDoneButton extends React.Component {

    render(): React.ReactNode {
        return(
            <button className="button">Отметить всё как выполнено</button>
        )
    }
}

export default AllDoneButton;