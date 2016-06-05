import React from "react";
import {Slide} from "spectacle";

export default class ImageSlide extends React.Component {
  static defaultProps = {
    transition: ["none"],
    bgColor: "white",
    bgSize: "contain",
    bgRepeat: "no-repeat"
  };

  render() {
    return <Slide {...this.props}/>;
  }
}
