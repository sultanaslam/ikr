import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
  <Layout title='Home'>
    <p>Welcome to the home page</p>
    <Link as={`/demo/${123}`} href='/demo/[pid]'>
      <a>Test Demo</a>
    </Link>
  </Layout>
);
