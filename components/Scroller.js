import React from 'react';

export class Scroller extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = e => {
    if (window.pageYOffset >= 170) {
      document.querySelector('.btn-to-top').style.display = 'inline';
    } else {
      document.querySelector('.btn-to-top').style.display = 'none';
    }
  };
  render() {
    return <div />;
  }
}

export default Scroller;
