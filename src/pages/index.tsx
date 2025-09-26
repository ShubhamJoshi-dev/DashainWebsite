import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Traditions from '@/components/Traditions';
import Gallery from '@/components/Gallery';
import Wishes from '@/components/Wishes';

const Home: NextPage = () => {
  return (
    <Layout
      title="Dashain Festival 2081 - Nepal's Greatest Festival of Victory"
      description="Experience Dashain 2081, Nepal's most celebrated festival. Join us in celebrating victory, family reunions, traditions, and the rich cultural heritage of Nepal."
      keywords="Dashain 2081, Nepal Festival, Durga Puja, Tika Jamara, Nepalese Culture, Hindu Festival, Victory Celebration, Family Reunion, Ghatasthapana, Dashami"
    >
      <Hero />
      <About />
      <Traditions />
      <Gallery />
      <Wishes />
    </Layout>
  );
};

export default Home;
