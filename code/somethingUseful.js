import React from 'react';


const Responsive = React.createClass({
  getInitialState() {
    return {
      isOpened: false
    }
  },


  onToggle() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  },


  render() {
    const {isOpened} = this.state;

    return (
<div className="intro">
  <button
    onClick={this.onToggle}>
    {isOpened ? 'Close' : 'Open'}
  </button>

  <div className="responsive"
    style={{width: isOpened ? '100%' : 0}}>

    <div className="content">
      Should be<br />
      <b>hidden on small</b><br />
      screens
    </div>
  </div>

  <p>Window width <b>¯\_(ツ)_/¯</b></p>
  <p>Small screen <b>¯\_(ツ)_/¯</b></p>
</div>
    );
  }
});


export default Responsive;
