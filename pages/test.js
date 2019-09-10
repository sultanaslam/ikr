import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Test = ({ router }) => (
  <Layout title={router.query.title}>
    <p>ASDF !!!!!!!!!!!!</p>
    <p style={{ width: '80vw' }}>{router.query.title}</p>
  </Layout>
);

export default withRouter(Test);
