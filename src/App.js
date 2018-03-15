import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <p>React here!</p>
        <Modal 
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({isOpen: false})}>
          <Modal.Title>Title</Modal.Title>
          <Modal.Body>Body</Modal.Body>
          <Modal.Title>Footer</Modal.Title>
        </Modal>
      </div>
    );
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
