import { Component } from "react";
import Khouloud from "./khouloudbaidi.jpg";

class Person extends Component {
  state = {
    ImgSrc: Khouloud,
    FullName: "Khouloud Baidi",
    Bio: "Student in the GoMyCode training center",
    Profession: "Full Stack JS Developer",
    S: 0,
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ S: this.state.S + 1 });
    }, 1000);
  };

  render() {
    return (
      <>
        <img src={this.state.ImgSrc} alt="kb" />
        <div>
          <h1>
            {this.state.S}
          </h1>
          <h2>{this.state.FullName}</h2>
          <h2>{this.state.Bio}</h2>
          <h2>{this.state.Profession}</h2>
        </div>
      </>
    );
  }
}

export default Person;
