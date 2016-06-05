import React, {PropTypes} from "react";
import {Slide} from "spectacle";
import scrollTo from "../utils/scroll-to";

function highlightCode(code, lang) {
  return window.Prism ? window.Prism.highlight(code, window.Prism.languages[lang]) : code;
}

function getLineNumber(lineIndex) {
  return '<span class="token comment">' + (lineIndex + 1) + '.</span> ';
}

export default class CodeSlide extends React.Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    ranges: PropTypes.arrayOf(PropTypes.shape({
      loc: PropTypes.arrayOf(PropTypes.number).isRequired,
      title: PropTypes.string
    }))
  };

  static defaultProps = {
    transition: ["none"],
    bgColor: "#122b45",
    margin: 1
  };

  state = {
    active: 0
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  getHighlightedCodeLines() {
    var newCode = this.props.code;
    var oldCode = this._oldCode;

    var newLang = this.props.lang;
    var oldLang = this._oldLang;

    if (newCode !== oldCode || newLang !== oldLang) {
      this._highlightedCodeLines = highlightCode(newCode, newLang).split('\n');
      this._oldCode = newCode;
      this._oldLang = newLang;
    }

    return this._highlightedCodeLines;
  }

  scrollIntoView = () => {
    var start = this.refs.start;
    var end = this.refs.end || start;
    var pre = this.refs.pre;

    if (!start || !end) return;

    var top = start.offsetTop;
    var bottom = end.offsetTop + end.offsetHeight;

    var middle = Math.floor((top + bottom) / 2);
    var height = pre.offsetHeight;
    var half = height / 2;

    var next = middle - half;

    scrollTo(pre, 0, next);
  };

  onKeyDown = e => {
    if (e.which === 38) {
      e.preventDefault();
      this.setState({ active: Math.max(this.state.active - 1, 0) }, this.scrollIntoView);
    } else if (e.which === 40) {
      e.preventDefault();
      this.setState({ active: Math.min(this.state.active + 1, this.props.ranges.length - 1) }, this.scrollIntoView);
    }
  };

  render() {
    const {active} = this.state;
    const {code, lang, ranges, ...props} = this.props;

    const item = ranges[active] || {};
    const range = item.loc || [null, null];

    var lines = this.getHighlightedCodeLines().map(function(line, index) {
      return <div
        key={index}
        ref={index === range[0] ? 'start' : (index - 1 === range[1] ? 'end' : null)}
        dangerouslySetInnerHTML={{
          __html: getLineNumber(index) + line
        }}
        style={{
          opacity: (range[0] <= index && range[1] > index) ? 1 : 0.2
        }}/>;
    });

    return (
      <Slide {...props}>
        {item.title && (
          <h1 style={{
            position: "fixed",
            left: "50%",
            top: "20px",
            transform: "translate(-50%)",
            padding: "20px 40px",
            border: "10px solid hotpink",
            fontSize: "2.5em",
            color: "white",
            textTransform: "uppercase",
            whiteSpace: "nowrap"
          }}>{item.title}</h1>
        )}
        <pre ref="pre" style={{
          position: "relative",
          textAlign: "left",
          overflow: "auto",
          color: "white",
          height: "646px",
          margin: 0,
          padding: "40% 0"
        }}>
          <code>{lines}</code>
        </pre>
        {item.note && (
          <div style={{
            position: "fixed",
            bottom: "20px",
            width: "100%",
            padding: "20px",
            background: "black",
            color: "white",
            fontFamily: "monospace",
            textAlign: "left"
          }}>{item.note}</div>
        )}
      </Slide>
    );
  }
}
