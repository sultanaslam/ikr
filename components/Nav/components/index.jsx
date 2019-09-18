import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

// import Item from './Item';
// import MobileMenu from './MobileMenu';
// import {
//   resultByClass,
//   resultByBoard,
//   datesheetByClass,
//   datesheetByBoard,
//   pastpapersByClass,
//   pastpapersByBoard,
//   jobIndustries,
//   jobCities,
//   newsCategory
// } from '../data';

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
        {/* <MobileMenu toggleDrawer={this.toggleDrawer} state={this.state.left} /> */}

        <ul className='links'>
          <Link href='/'>
            <li className='link'>
              <i className='fas fa-home pr-5' />
              Home
            </li>
          </Link>
          <Link href='/news'>
            <li className='link'>
              <i className='fas fa-globe pr-5' />
              News
            </li>
          </Link>
        </ul>
        {/* <ul className='responsive-sidebar'>
          <Button onClick={this.toggleDrawer('left', true)}>
            <i className='fas fa-bars' />
          </Button>
        </ul> */}
        <style jsx>
          {`
            .navbar {
              position: sticky;
              border-bottom: 3px solid #041d79;
              font-weight: bold;
              top: 0;
              z-index: 5;
              display: -webkit-flex;
              display: -moz-flex;
              display: -ms-flex;
              display: -o-flex;
              display: flex;
              -webkit-flex-wrap: wrap;
              -moz-flex-wrap: wrap;
              -ms-flex-wrap: wrap;
              -o-flex-wrap: wrap;
              flex-wrap: wrap;
              background: #121233;
              background: -webkit-linear-gradient(to top, #121233, #7579ff);
              background: -o-linear-gradient(to top, #121233, #7579ff);
              background: -moz-linear-gradient(to top, #121233, #7579ff);
              background: linear-gradient(to top, #121233, #7579ff);
              box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
                0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 3px 1px -2px rgba(0, 0, 0, 0.12);
              height: auto;
            }
            .navbar ul.links {
              list-style-type: none;
              margin: 0;
              padding: 0;
              display: flex;
            }
            .navbar ul.links .link {
              font-size: 16px;
              font-family: 'Roboto', sans-serif;
              color: #fff !important;
              font-weight: 100;
            }
            .navbar ul.links li.link {
              display: inline-block;
              padding: 15px 20px;
            }
            .navbar ul.links li:hover {
              background-color: #1c0c75;
              cursor: pointer;
            }
            .navbar ul.links .sub-nav-items {
              min-height: 250px;
              display: flex;
              flex-wrap: wrap;
              position: absolute;
              background-color: #fff;
              opacity: 1;
              z-index: 4;
              left: 0;
              width: 100%;
              box-sizing: border-box;
              -webkit-transition: height 0.2s;
              transition: height 0.2s;
            }
            .navbar ul.links .sub-nav-items .content {
              display: flex;
              width: 100%;
              z-index: 1;
            }
            .navbar ul.links .sub-nav-items .content .links {
              flex-basis: 60%;
              padding: 25px;
            }
            .navbar ul.links .sub-nav-items .content .links h2 {
              color: #ff9800;
            }
            .navbar ul.links .sub-nav-items .content .links .items {
              margin-top: 10px;
              display: flex;
            }
            .navbar ul.links .sub-nav-items .content .links .items a {
              padding: 10px;
              color: #222;
              text-align: center;
              margin-right: 10px;
              border-radius: 5px;
              width: 125px;
            }
            .navbar ul.links .sub-nav-items .content .links .items a .baf {
              display: flex;
              justify-content: center;
              margin: 3px 0;
            }
            .navbar
              ul.links
              .sub-nav-items
              .content
              .links
              .items
              a
              .baf
              .border {
              width: 0%;
            }
            .navbar
              ul.links
              .sub-nav-items
              .content
              .links
              .items
              a:last-child {
              margin-right: 0;
            }
            .navbar
              ul.links
              .sub-nav-items
              .content
              .links
              .items
              a:hover
              .border {
              transition: width 0.8s;
              height: 3px;
              width: 80%;
              background-color: #ff9800;
            }
            .navbar ul.links .sub-nav-items .content .info {
              flex-basis: 40%;
              background-position: center;
              opacity: 0.8;
              min-height: 250px;
            }
            .navbar ul.links .sub-nav-items .content .result-img {
              background-image: url(../images/resultitem.jpg);
            }
            .navbar ul.links .sub-nav-items .content .datesheet-img {
              background-image: url(../images/datesheetmenu.jpg);
            }
            .navbar ul.links .sub-nav-items .content .pastpaper-img {
              background-image: url(../images/papermenu.jpg);
            }
            .navbar ul.links .sub-nav-items .content .job-img {
              background-image: url(../images/jobmenu.jpg);
            }
            .navbar ul.links .dpNone {
              min-height: 0;
            }
            .navbar ul.links .dpNone * {
              display: none;
            }
            @media screen and (max-width: 799px) {
               {
                /* .navbar ul.links {
                display: none;
              } */
              }
            }
            .navbar ul.responsive-sidebar {
              display: none;
            }
            @media screen and (max-width: 799px) {
              .navbar ul.responsive-sidebar {
                display: block;
                margin: 2px 0 0;
                padding-left: 0;
              }
            }
            .navbar ul.responsive-sidebar i.fas.fa-bars {
              color: #fff;
              font-size: 24px;
              padding: 5px 0px;
              border-radius: 5px;
            }
            .sidebar-container {
              padding: 10px 50px 10px 20px;
              font-size: 18px;
              font-weight: bold;
            }
            .sidebar-container a {
              color: #fff;
            }
            .drawer {
              height: 100%;
            }
            .pr-5 {
              padding-right: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Navbar;
