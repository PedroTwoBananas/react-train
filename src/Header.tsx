import React from "react";
import { render } from "react-dom";


class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <span>Введите задачу</span>
            </div>
    )
    }
}

export default Header;