import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsDesk from '../components/NewsDesk';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <NewsDesk />
      <Footer />
    </>
  );
}
