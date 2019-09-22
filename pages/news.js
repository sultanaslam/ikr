import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import LatestNewsSmall from '../components/News/LatestNewsSmall';
import SideNews from '../components/News/SideNews';

const PostLink = ({ slug, title }) => (
  <li>
    <Link href={`/post/${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const News = ({ data, data: { latest } }) => (
  <Layout title='News'>
    <div id='news'>
      <div className='left-container'>
        <LatestNewsSmall latest={latest} />
      </div>
      <div className='right-container'>
        <SideNews latest={latest} />
      </div>
    </div>
    <ul>
      <PostLink slug='react-post' title='React Post' />
      <PostLink slug='angular-post' title='Angular Post' />
      <PostLink slug='vue-post' title='Vue Post' />
    </ul>
  </Layout>
);

export default News;

News.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://ilam-staging.herokuapp.com/api/news/viewall`);
  const data = await res.json();
  return { data };
};
