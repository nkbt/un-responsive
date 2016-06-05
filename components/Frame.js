import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';


const Iframe = ({width, port, query = ''}) => (
  <iframe
    src={`http://localhost:${port}/responsive${query}`}
    width={width}
    height={600}
    style={{marginTop: 20, border: '1px solid #000', background: '#fff'}}/>
);


const Cached = React.createClass({
  propTypes: {
    port: React.PropTypes.number.isRequired
  },


  shouldComponentUpdate,


  getInitialState() {
    return {
      isSmall: true,
      reload: false
    }
  },


  render() {
    const {port} = this.props;
    const {reload, isSmall} = this.state;
    const w = isSmall ? 768 : 1024;

    return (
      <div>
        <button onClick={() => this.setState({isSmall: true, reload: false})}>Small</button>
        <button onClick={() => this.setState({isSmall: false, reload: false})}>Large</button>
        <button onClick={() => this.setState({isSmall: true, reload: true})}>Small (r)</button>
        <button onClick={() => this.setState({isSmall: false, reload: true})}>Large (r)</button>
        <br />
        {reload ?
          <Iframe width={w} port={port} query={isSmall ? '?s' : '?l'} /> : (
          <Motion style={{width: spring(w)}}>
            {({width}) => <Iframe width={width} port={port} />}
          </Motion>
        )}
      </div>
    );
  }
});

const Frame = React.createClass({
  shouldComponentUpdate,

  render() {
    const {port} = this.props;
    return <Cached port={port} />;
  }
});

export default Frame;
