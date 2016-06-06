import React from "react";
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link as SpectacleLink,
  ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

import Frame from "../components/Frame";


import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import CodeSlide from "spectacle-code-slide";


require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./prezo.css");


const Link = ({...props}) => <SpectacleLink
  style={{whiteSpace: 'nowrap'}}
  padding="20px"
  textColor="#016"
  {...props} />;


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
  primary: "#40e5ff",
  tertiary: "black",
  quartenary: "black"
}), {
  primary: 'Helvetica Neue, Helvetica, Arial, sans-serif'
});


const images = {
//   title: require("../assets/title.png")
};

const code = {
  helloWorld: require("raw!../code/helloWorld.js"),
  somethingUseful: require("raw!../code/somethingUseful.js"),
  windowSizeReducer: require("raw!../code/windowSizeReducer.js"),
  windowSizeListener: require("raw!../code/windowSizeListener.js"),
  connect: require("raw!../code/connect.js"),
  beResponsible: require("raw!../code/beResponsible.js"),
  useIsInitial: require("raw!../code/useIsInitial.js")
};

preloader(images);


const getColor = (() => {
  let n = 0;
  return () => {
    n = (n + 1) % 20;
    return `c${n}`;
  }
})();

//const shadow = {
//  textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)'
//};


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress="bar">
          <Slide bgColor={getColor()}>
            <Heading fit caps lineHeight={2}>
              Un.Responsive
            </Heading>

            <Text>
              Animated responsive universal JS layout
            </Text>

            <Text margin="100px 0 0 0" textSize="1.5em" bold>Nik Butenko</Text>
            <Text bold>
              <Link href="https://twitter.com/nkbtnk">@nkbtnk</Link>
              <Link padding="20px" textColor="#016"
                href="https://github.com/nkbt">github.com/nkbt</Link>
            </Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading fit>
              Let's start from scratch
            </Heading>
            <Text margin="100px 0 0 0">
              Example is built on top of
              <Link padding="20px" textColor="#016"
                href="github.com:mz026/universal-redux-template.git">
                universal-redux-template
              </Link>
            </Text>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.helloWorld}
            ranges={[
              { loc: [6, 9], title: "Hello World" }
            ]} />

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3001" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading fit>
              Add something useful
            </Heading>
            <Text margin="100px 0 0 0">
              sort of
            </Text>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.somethingUseful}
            ranges={[
              { loc: [0, 47], title: 'Eventually responsive.js' },
              { loc: [11, 16] },
              { loc: [28, 37] },
              { loc: [38, 40] }
            ]} />

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3002/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading fit>
              Add window size reducer
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.windowSizeReducer}
            ranges={[
              { loc: [-1, 0], title: 'reducer' },
              { loc: [3, 8] },
              { loc: [15, 23] }
            ]} />

          <Slide bgColor={getColor()}>
            <Heading fit>
              ...and window resize listener
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.windowSizeListener}
            ranges={[
              { loc: [-1, 0], title: 'listener' },
              { loc: [3, 8] },
              { loc: [14, 15] },
              { loc: [21, 25] },
              { loc: [32, 34] },
              { loc: [36, 40] }
            ]} />

          <Slide bgColor={getColor()}>
            <Heading fit>
              Connect!
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.connect}
            ranges={[
              { loc: [1, 2]},
              { loc: [4, 9]},
              { loc: [23, 25] },
              { loc: [31, 33] },
              { loc: [41, 44] },
              { loc: [51, 60] }
            ]} />

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3004/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading fit>
              Show block responsibly
            </Heading>
            <Text margin="100px 0 0 0">
              Hide by default on small screen
            </Text>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.beResponsible}
            ranges={[
              { loc: [-1, 0], title: 'Be responsible' },
              { loc: [11, 14] },
              { loc: [18, 21] }
            ]} />

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3004/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading fit>
              Problem.
            </Heading>
            <Text margin="100px 0 0 0">
              Block disappears with delay on small screen
            </Text>
            <Text bold>
              not nice =(
            </Text>
          </Slide>

          <Slide bgColor={getColor()}>
            <Heading fit>
              Fix it with <code>isInitial</code>
            </Heading>
            <Text margin="100px 0 0 0">
              It is <code>true</code> until we know window size
            </Text>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={code.useIsInitial}
            ranges={[
              { loc: [-1, 0], title: 'Use IsInitial' },
              { loc: [5, 7] },
              { loc: [12, 17] }
            ]} />

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3005/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3006/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3007/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
          </Slide>

          <Slide bgColor={getColor()}>
            <Frame url="http://localhost:3008/responsive" />
          </Slide>

          <Slide bgColor={getColor()}>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
