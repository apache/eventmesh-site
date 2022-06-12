import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const Index = (): JSX.Element => (
  <Layout
    description="Apache EventMesh (Incubating)"
  >
    <Hero />
    <main>
      <Features />
    </main>
  </Layout>
);

export default Index;
