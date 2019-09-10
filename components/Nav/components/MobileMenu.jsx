import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import MobileItem from './MobileItem';
// import logo from '';
import { mobileNavItems } from '../data';

const MobileMenu = props => {
  const sideList = (
    <div className='sidebar-container'>
      <List>
        {mobileNavItems.map((v, i) => (
          <MobileItem key={i} values={v} />
        ))}
      </List>
    </div>
  );
  return (
    <span>
      <Drawer open={props.state} onClose={props.toggleDrawer('left', false)}>
        <div
          className='theme-btn-bg drawer drawer-border-clr'
          tabIndex={0}
          role='button'
          onClick={props.toggleDrawer('left', false)}
          onKeyDown={props.toggleDrawer('left', false)}
        >
          <img
            src={'/static/images/logom.png'}
            alt='Logo Failed to Load'
            width={228}
          />
          {sideList}
        </div>
      </Drawer>
    </span>
  );
};

export default MobileMenu;
