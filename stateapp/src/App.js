import React, { Component } from "react";
import Person from "./Component/Person";
import { Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div className="App">
        <Button
          variant="success"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Show
        </Button>
        {this.state.show && <Person show={this.state.show} />}
      </div>
    );
  }
}

export default App;
