import React from "react";
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link,
  ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

import Frame from "../components/Frame";


import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";


require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const palette = [
  '#23ccc4',
  '#97e04c',
  '#fdb62e',
  '#fb535d',
  '#ee76be',
  '#c05e5d',
  '#35a951',
  '#d6e64a',
  '#20b4e5',
  '#c558b3',
  '#9a6446',
  '#7a5eb0',
  '#8fd5ed',
  '#fd8242',
  '#c0bebe',
  '#404aa9',
  '#fee635',
  '#807f80',
  '#147abd',
  '#424243'
];

const theme = createTheme(palette.reduce((result, color, i) => ({...result, [`c${i}`]: color}), {
  primary: "#40e5ff"
}));


const images = {
//   title: require("../assets/title.png")
};

const code = {
//  someCode: require("raw!../assets/someCode.example"),
};

preloader(images);


const getColor = (() => {
  let n = 0;
  return () => {
    n = (n + 1) % 20;
    return `c${n}`;
  }
})();


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress="bar">
          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Un-Responsive
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3001" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3002/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3004/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3004/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3005/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3006/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3007/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3008/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide bgColor={getColor()}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle 1
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
