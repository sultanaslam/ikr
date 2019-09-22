import Layout from '../../../components/Layout';
import fetch from 'isomorphic-unfetch';
import ReactHtmlParser from 'react-html-parser';

import SideNews from '../../../components/News/SideNews';

const NewsDetails = props => {
  console.log('PROPS: ', props);
  return (
    <Layout title='DEMO'>
      <div id='news'>
        <div className='left-container'>
          <h1
            style={{
              background: '#fff',
              padding: '10px 5px',
              margin: '0 0 10px'
            }}
          >
            {props.data.heading}
          </h1>
          <div className='news-post'>
            <div>{ReactHtmlParser(props.data.description)}</div>
          </div>
        </div>
        <div className='right-container'>
          <SideNews latest={props.arr.latest} />
        </div>
      </div>
    </Layout>
  );
};

NewsDetails.getInitialProps = async function(context) {
  const id = context.query.id.split('-')[0];
  const response = await fetch(
    `http://ilam-staging.herokuapp.com/api/news/getnews/${id}`
  );
  const data = await response.json();
  const res = await fetch(`http://ilam-staging.herokuapp.com/api/news/viewall`);
  const arr = await res.json();
  return { data, arr };
};

export default NewsDetails;
