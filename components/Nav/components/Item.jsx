import React, { Component } from 'react';
import Link from 'next/link';

import SubMenuLinks from './SubMenuLinks';

export class Item extends Component {
  state = {
    navsubItemDisplay: 'dpNone'
  };
  navItemsHoverHandler = displayStyle => {
    this.setState({ navsubItemDisplay: displayStyle });
  };

  render() {
    const {
      name,
      link,
      imageClass,
      byBoard,
      byClass,
      icon,
      isJob,
      isNews
    } = this.props;
    const display = this.state.navsubItemDisplay;
    return (
      <div
        onMouseEnter={() => {
          this.navItemsHoverHandler('');
        }}
        onMouseLeave={() => {
          this.navItemsHoverHandler('dpNone');
        }}
        onClick={() => {
          this.navItemsHoverHandler('dpNone');
        }}
      >
        <Link to={link}>
          <li>
            <i className={icon + ' pr-5'} />
            {name}
          </li>
        </Link>
        <div className={`sub-nav-items box-shadow ${display}`}>
          {/* {isJob ? (
            <SubMenuLinks
              byClass={byClass}
              byBoard={byBoard}
              imageClass={imageClass}
              isJob={isJob}
              isNews={isNews}
            />
          ) : (
            <SubMenuLinks
              byClass={byClass}
              byBoard={byBoard}
              imageClass={imageClass}
              isNews={isNews}
            />
          )} */}
        </div>
      </div>
    );
  }
}

export default Item;
