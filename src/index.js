import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Controlador extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {
          this.props.value
        }
      </button>
    );
  }
}
// ========================================

ReactDOM.render(<Controlador />, document.getElementById("root"));
