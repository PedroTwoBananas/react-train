import React from "react";
import {render} from 'react-dom';
import '../styles/button.css';

class AddButton extends React.Component {
    render(): React.ReactNode {
        return(
            <button className="button">Добавить</button>
        )
    }
}

export default AddButton;