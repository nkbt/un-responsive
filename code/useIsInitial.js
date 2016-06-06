import React from 'react';
import {connect} from 'react-redux';


const Responsive = React.createClass({
  propTypes: {
    isInitial: React.PropTypes.bool,
    width: React.PropTypes.number,
    isSmall: React.PropTypes.bool
  },


  getInitialState() {
    return {
      isOpened: this.props.isInitial ? 
        false : 
        !this.props.isSmall
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

        <div className="responsive"
          style={{width: isOpened ? width : 0}}>

          <div className="content">
            Should be<br />
            <b>hidden on small</b><br />
            screens
          </div>
        </div>

        <p>Window width <b>{width}</b></p>
        <p>Small screen
          <b>{isSmall ? 'yes' : 'no'}</b></p>

      </div>
    );
  }
});


const mapStateToProps = ({
  windowSize: {width, isSmall}
}) => ({
  width,
  isSmall
});

export default connect(mapStateToProps)
(Responsive);
