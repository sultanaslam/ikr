import React from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

// import footerLogo from '../static/images/footer.png';

export class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <button
          className='btn btn-to-top'
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <i className='fas fa-arrow-up' />
        </button>
        <div className='footer-top'>
          <Link href='/'>
            <img
              className='cursorPointer'
              src={'../static/images/footer.png'}
              alt='Ilam Ki Roshni'
            />
          </Link>
          <div className='social-icons'>
            <a href={'https://www.twitter.com/'}>
              <i className='fab fa-twitter' />
            </a>
            <a href={'https://www.facebook.com'}>
              <i className='fab fa-facebook-f' />
            </a>
            <a href={'https://www.instagram.com'}>
              <i className='fab fa-instagram' />
            </a>
            <a href={'https://www.youtube.com'}>
              <i className='fab fa-youtube' />
            </a>
          </div>
        </div>
        <div className='footer-bottom'>
          <div>
            {/* <Link to='/'>Home</Link> |<Link to='/about'>About Us</Link> |
            <Link to='/advertise'>Advertise With Us</Link> |
            <Link to='/policy'>Privacy Policy</Link> |
            <Link to='/contact'>Contact Us</Link> */}
          </div>

          <p className='info'>
            &copy; 2019, All Rights Reserverd by WMZBros & ilamkiroshni.com
          </p>
          <p className='disclamer'>
            <b>Disclaimer:</b> We Help To Providing The Best Source Of Study
            Information. This Website Try To Make Sure The Accuracy Informative
            Material For The Students Of Pakistan.
          </p>
        </div>
        <style jsx>{`
          .footer .btn-to-top {
            display: none;
            position: fixed;
            padding: 10px 15px;
            font-size: 20px;
            border-radius: 5px;
            background: #000000b0;
            color: #fff;
            outline: none;
            right: 10px;
            bottom: 10px;
            border: none;
          }
          .footer .btn-to-top:hover {
            cursor: pointer;
            background: #000000e0;
          }
          @media screen and (max-width: 620px) {
            .footer .btn-to-top {
              bottom: 70px;
            }
          }
          .footer .footer-top {
            display: flex;
            padding: 0 20px 0 20px;
            background: #121233;
            background: -webkit-linear-gradient(to top, #121233, #7579ff);
            background: -o-linear-gradient(to top, #121233, #7579ff);
            background: -moz-linear-gradient(to top, #121233, #7579ff);
            background: linear-gradient(to top, #121233, #7579ff);
            justify-content: space-between;
          }
          @media screen and (max-width: 570px) {
            .footer .footer-top {
              flex-direction: column;
              align-items: center;
            }
          }
          .footer .footer-top .social-icons {
            display: flex;
            align-items: center;
          }
          .footer .footer-top .social-icons a {
            color: #ccc;
            font-size: 32px;
            margin: 0 2px;
          }
          .footer .footer-top img {
            margin: 0 15px;
          }
          @media screen and (max-width: 570px) {
            .footer .footer-top img {
              margin: 0px 10px;
            }
          }
          .footer .footer-top .fab,
          .footer .footer-top .svg-inline--fa {
            margin: 0 15px;
          }
          @media screen and (max-width: 570px) {
            .footer .footer-top .fab {
              margin: 0 10px 15px 10px;
            }
          }
          .footer .footer-top .fa-twitter:hover {
            color: #55acee;
          }
          .footer .footer-top .fa-facebook-f:hover {
            color: #3b5999;
          }
          .footer .footer-top .fa-instagram:hover {
            color: #e4405f;
          }
          .footer .footer-top .fa-youtube:hover {
            color: #cd201f;
          }
          .footer .footer-bottom {
            display: flex;
            padding: 20px 10px 70px;
            background: #2e2e54;
            color: #fff;
            font-size: 22px;
            flex-direction: column;
            align-items: center;
          }
          .footer .footer-bottom a {
            color: #99a0a0;
            font-size: 16px;
            margin: 0 5px 0 7px;
          }
          .footer .footer-bottom a:hover {
            color: #fff;
          }
          .footer .footer-bottom .info {
            font-size: 16px;
            margin: 5px;
            color: #aaa;
          }
          .footer .footer-bottom .disclamer {
            margin-top: 0;
            color: #aaa;
            font-size: 12px;
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;
