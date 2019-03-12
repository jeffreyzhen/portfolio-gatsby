import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jeffrey Zhen - Front-end Developer"
      keywords={[
        `portfolio`,
        `developer`,
        `react`,
        `front-end`,
        `javascript`,
        `boston`,
        `gatsby`,
        `react-native`,
        `node`,
      ]}
    />
    <Hero />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
