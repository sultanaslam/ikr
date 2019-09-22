import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav/components';
import Footer from './Footer';
import Scroller from './Scroller';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
  if (document.querySelector('body')) {
    document.querySelector('body').id = 'loading';
    document.querySelector('#__next').style.display = 'none';
  }
};

Router.onRouteChangeComplete = () => {
  if (document.querySelector('body')) {
    document.querySelector('body').id = '';
    document.querySelector('#__next').style.display = 'block';
  }
  NProgress.done();
};
Router.onRouteChangeError = () => NProgress.done();

const Layout = props => (
  <div className='root'>
    <Scroller />
    <Head>
      <title>Ilam Ki Roshni</title>
    </Head>
    <Nav />
    {props.children}

    <footer>
      <Footer />
    </footer>
    <style global jsx>{`
      body {
        margin: 0;
        background: #e2e2e2;
      }
      a,
      .cursorPointer {
        cursor: pointer;
      }
      #loading {
        height: 100vh;
        width: 100vw;
        z-index: 1000;
        background: url(https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif);
        background-position: center;
        background-size: cover;
      }
    `}</style>
  </div>
);

export default withRouter(Layout);
