import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsDesk from '../components/NewsDesk';
import Products from '../components/Products';

import * as S from './styles';

import { CounterCartContextProvider } from '../components/hooks/useItems';

export default function Home() {
  return (
    <>
      <CounterCartContextProvider>
        <S.Container>
          <Header />
          <Banner />
          <Products />
          <NewsDesk />
          <Footer />
        </S.Container>
      </CounterCartContextProvider>
    </>
  );
}
