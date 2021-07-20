import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Incubation from '../components/Incubation';

const Home = (): JSX.Element => (
  <Layout
    description="Apache EventMesh (Incubating)"
  >
    <Hero />
    <main>
      <Features />
      <Incubation />
    </main>
  </Layout>
);

export default Home;
