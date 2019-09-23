import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import LatestNewsSmall from '../components/News/LatestNewsSmall';
import SideNews from '../components/News/SideNews';
import TwoDivsNews from './../components/News/TwoDivsNews';
import { ThreeNews } from './../components/News/ThreeNews';

const News = ({
  data,
  data: { latest, international, pakistan, education, sports, entertainment }
}) => (
  <Layout title='News'>
    <div id='news'>
      <div className='left-container'>
        <LatestNewsSmall latest={latest} />
        <TwoDivsNews data={international} />
        <ThreeNews
          data={pakistan || []}
          heading='Pakistan News'
          link='/news/5d62832498672e34b4edc7ea-pakistan-news'
        />
        <ThreeNews
          data={education || []}
          heading='Education News'
          link='news/5d62826098672e34b4edc7e7-education-news'
        />
        <ThreeNews
          data={sports || []}
          heading='Sports News'
          link='news/5d62807d98672e34b4edc7e6-sports-news'
        />
        <ThreeNews
          data={entertainment || []}
          heading='Entertainment News'
          link='news/5d627f1b98672e34b4edc7e5-entertainment-news'
        />
      </div>
      <div className='right-container'>
        <SideNews latest={latest} />
      </div>
    </div>
  </Layout>
);

export default News;

News.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://ilam-staging.herokuapp.com/api/news/viewall`);
  const data = await res.json();
  return { data };
};
