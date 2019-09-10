import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title='Error!!!'>
    {statusCode
      ? `No Internet Connection, Status Code ${statusCode}`
      : `404, Page not found`}
  </Layout>
);
