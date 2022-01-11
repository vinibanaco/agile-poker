import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Scrum Voting</title>
        <meta
          name="description"
          content="The easiest way for you and your team to vote user stories"
        />
      </Head>
    </Layout>
  );
};

export default Home;
