import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import Item from './Item';
import MobileMenu from './MobileMenu';
import {
  resultByClass,
  resultByBoard,
  datesheetByClass,
  datesheetByBoard,
  pastpapersByClass,
  pastpapersByBoard,
  jobIndustries,
  jobCities,
  newsCategory
} from '../data';

export class Navbar extends React.Component {
  state = {
    left: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    return (
      <div className='navbar'>
        <MobileMenu toggleDrawer={this.toggleDrawer} state={this.state.left} />

        <ul className='links'>
          <li>
            <i class='fas fa-home pr-5'></i>Home
          </li>
          <Link href='/'>
            <li>
              <i className='fas fa-home pr-5' />
              Home
            </li>
          </Link>
          <Link href='/blog'>
            <li>
              <i className='fas fa-home pr-5' />
              BLOG
            </li>
          </Link>
          {/*<Item
            link='/result'
            name='Results'
            icon='fas fa-graduation-cap'
            imageClass='result-img'
            byClass={resultByClass}
            byBoard={resultByBoard}
          />
          <Item
            link='/datesheet'
            name='Date Sheet'
            icon='fas fa-clipboard-list'
            imageClass='datesheet-img'
            byClass={datesheetByClass}
            byBoard={datesheetByBoard}
          />
          <Item
            link='/pastpapers'
            name='Past Papers'
            icon='fas fa-paper-plane'
            imageClass='pastpaper-img'
            byClass={pastpapersByClass}
            byBoard={pastpapersByBoard}
          />
          <Item
            link='/jobs'
            name='Jobs'
            icon='fas fa-briefcase'
            imageClass='jobmenu-img'
            byClass={jobIndustries}
            byBoard={jobCities}
            isJob={true}
          />
          <Item
            link='/news'
            name='News'
            icon='fas fa-globe'
            imageClass='newsmenu-img'
            byClass={newsCategory.slice(0, 4)}
            byBoard={newsCategory.slice(4, 8)}
            isNews={true}
          /> */}
        </ul>
        <ul className='responsive-sidebar'>
          <Button onClick={this.toggleDrawer('left', true)}>
            <i className='fas fa-bars' />
          </Button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
