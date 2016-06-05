import React, {PropTypes} from "react";
import {Heading, CodePane} from "spectacle";
import Scrollable from './scrollable';

const buttonStyles = {
  margin: '0.5em',
  padding: '0.4em 0.8em',
  border: 'none',
  background: '#36c',
  color: 'white'
};

export default class CodeExecution extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired
  };

  state = {
    output: null
  };

  onExecuteClick = () => {
    let output = this.props.fn();
    output = JSON.stringify(output, null, 2);
    this.setState({ output });
  };

  onResetClick = () => {
    this.setState({ output: null });
  };

  render() {
    const source = this.props.fn.toString().split('\n')[1].replace(/\s+return /ig, '');
    const output = this.state.output;

    let outputTextSize;

    if (output) {
      const lines = output.split('\n');
      if (lines.length > 0) outputTextSize = '1.5em';
      if (lines.length > 2) outputTextSize = '1em';
      if (lines.length > 5) outputTextSize = '1.6em';
      if (lines.length > 10) outputTextSize = '0.8em';
    }

    return (
      <Scrollable>
        {!this.state.output && <Heading textColor="black">{this.props.heading}</Heading>}
        {!this.state.output && <button style={buttonStyles} onClick={this.onExecuteClick}>Execute</button>}
        {!this.state.output && <CodePane textSize="2em" lang="js" source={source}/>}
        {this.state.output && <button style={buttonStyles} onClick={this.onResetClick}>Reset</button>}
        {this.state.output && <CodePane textSize={outputTextSize} lang="js" source={this.state.output}/>}
      </Scrollable>
    );
  }
}
