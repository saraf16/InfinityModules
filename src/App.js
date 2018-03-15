import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <Modal 
        isOpen={this.state.isOpen}
        onClosed={() => this.setState({isOpen: false})}>
      </Model>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
