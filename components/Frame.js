import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';


const Iframe = ({width, url, query = ''}) => (
  <iframe
    src={`${url}${query}`}
    width={width}
    height={600}
    style={{marginTop: 20, border: '1px solid #000', background: '#fff'}}/>
);


const Cached = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },


  shouldComponentUpdate,


  getInitialState() {
    return {
      isSmall: true,
      reload: false
    }
  },


  render() {
    const {url} = this.props;
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
          <Iframe width={w} url={url} query={isSmall ? '?s' : '?l'} /> : (
          <Motion style={{width: spring(w)}}>
            {({width}) => <Iframe width={width} url={url} />}
          </Motion>
        )}
      </div>
    );
  }
});

const Frame = React.createClass({
  shouldComponentUpdate,

  render() {
    const {url} = this.props;
    return <Cached url={url} />;
  }
});

export default Frame;
