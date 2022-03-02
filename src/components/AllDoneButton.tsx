import React from 'react'
import '../styles/button.css'

interface AllDoneProps {
   markAllAsDone: () => void
}

class AllDoneButton extends React.Component<AllDoneProps> {
   render() {
      return (
         <button onClick={this.props.markAllAsDone} className="button">
            Отметить всё как выполнено
         </button>
      )
   }
}

export default React.memo(AllDoneButton)
