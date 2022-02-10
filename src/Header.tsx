import React from "react";
import { render } from "react-dom";
import AddButton from "./AddButton";
import AllDoneButton from "./AllDoneButton";
import DeleteAllDoneButton from "./DeleteAllDoneButton";
import Input from "./Input";


class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <Input/>
                <AddButton/>
                <AllDoneButton/>
                <DeleteAllDoneButton/>
            </div>
    )
    }
}

export default Header;