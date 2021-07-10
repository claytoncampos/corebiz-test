import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import { Container } from './styles';
import { useWindowSize } from '../hooks/useWindowSize';

import bannerDesk from '../../assets/images/bannerDesk.svg';
import bannerMobile from '../../assets/images/bannerMobile.svg';

export default function Banner() {
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 580);

  useEffect(() => {
    setIsMobile(width < 500);
  }, [width]);

  return (
    <Container>
      <Carousel itemsToShow={1}>
        <img src={isMobile ? bannerMobile : bannerDesk} alt="banner produtos" />
        <img src={bannerDesk} alt="banner itens" />
        <img src={bannerDesk} alt="banner itens" />
      </Carousel>
    </Container>
  );
}
