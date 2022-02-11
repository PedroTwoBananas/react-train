import React from "react";
import Input from "./Input";
import {render} from 'react-dom';
import TaskInterface from "../interfaces/TaskInterface";
import '../styles/button.css';

class AddButton extends React.Component {

    

    render(): React.ReactNode {
        return(
            <button className="button">Добавить</button>
        )
    }
}

export default AddButton;