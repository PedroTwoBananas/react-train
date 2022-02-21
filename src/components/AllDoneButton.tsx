import React from "react";
import ComponentState from "../interfaces/ComponentState";
import '../styles/button.css'

interface AllDoneProps {
   markAllAsDone: ()=> void
}

class AllDoneButton extends React.Component<AllDoneProps, ComponentState> {

   render() {
      return (
          <button onClick={this.props.markAllAsDone} className="button">Отметить всё как выполнено</button>
      )
   }
}

export default AllDoneButton;