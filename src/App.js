import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal/Modal";
import NameCard from  "./components/NameCard/NameCard";

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
          onClosed={() => this.setState({isOpen: false})} type="sucess">
          type="sucess"
          <Modal.Title>Title</Modal.Title>
          <Modal.Body>Body</Modal.Body>
          <Modal.Title>Footer</Modal.Title>
        </Modal>
        <NameCard 
          name="Arnar Leifsson"
          email="arnarl@ru.is"
          telephone="354-777-7777"
          imageUrl="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-256.png"
        />
      </div>
    );
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
