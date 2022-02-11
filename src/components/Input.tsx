import React from "react";
import Header from "./Header";

class Input extends React.Component {
    render(): React.ReactNode {
        return(
            <input type="text" placeholder="Введите задачу"  />
        )
    }
}

export default Input;