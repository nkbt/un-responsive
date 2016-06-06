import React from 'react';
import {connect} from 'react-redux';
import {Motion} from 'react-motion';
import {responsive} from '../lib/responsive';


const Responsive = React.createClass({
  propTypes: {
    spring: React.PropTypes.func,
    width: React.PropTypes.number,
    isSmall: React.PropTypes.bool
  },


  getInitialState() {
    return {
      isOpened: false
    }
  },


  componentWillReceiveProps({isSmall}) {
    this.setState({
      isOpened: !isSmall
    })
  },


  onToggle() {
    this.setState({isOpened: !this.state.isOpened});
  },


  render() {
    const {width, isSmall} = this.props;
    const {isOpened} = this.state;

    return (
<div className="intro">
  <button onClick={this.onToggle}>{isOpened ? 'Close' : 'Open'}</button>

  <Motion style={{
    width: this.props.spring(
      isOpened ? width : 0
    )
  }}>
    {style => (
      <div className="responsive"
        style={style}>

        <div className="content">
          Should be<br />
          <b>hidden on small</b><br />
          screens
        </div>
      </div>
    )}
  </Motion>

  <p>Window width <b>{width}</b></p>
  <p>Small screen
    <b>{isSmall ? 'yes' : 'no'}</b></p>

</div>
    );
  }
});


const mapWindowSizeToProps = windowSize => ({
  width: windowSize.width,
  isSmall: windowSize.isSmall
});

export default responsive(
  mapWindowSizeToProps
)(Responsive);
