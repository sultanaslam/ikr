import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';

const MobileItem = ({ values: { icon, name, link } }) => (
  <span>
    <ListItem button style={{ borderBottom: '1px solid #777' }}>
      <Link to={link}>
        <i className={icon} /> <span>{name}</span>
      </Link>
    </ListItem>
  </span>
);

export default MobileItem;
