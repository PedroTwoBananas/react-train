import React from "react";
import { render } from "react-dom";
import AddTaskForm from "./AddTaskForm";
import AllDoneButton from "./AllDoneButton";
import DeleteAllDoneButton from "./DeleteAllDoneButton";
import '../styles/header.css'

class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="header">
                <AddTaskForm/>
                <AllDoneButton/>
                <DeleteAllDoneButton/>
            </div>
    )
    }
}

export default Header;