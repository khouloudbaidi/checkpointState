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
        <img
          src={this.state.ImgSrc}
          alt="kb"
          style={{
            width: "20%",
            height: "10%",
            borderRadius: "50%",
            margin: "auto 3%",
          }}
        />
        <div
          style={{
            padding: "3%",
            margin: "auto 0",
            // borderLeft: "solid #ffffff",
            // backgroundColor: "#b3ffb3	",
            color: "#fff7e6",
          }}
        >
          <h1>{this.state.S}</h1>
          <h2>{this.state.FullName}</h2>
          <h2>{this.state.Bio}</h2>
          <h2>{this.state.Profession}</h2>
        </div>
      </>
    );
  }
}

export default Person;
