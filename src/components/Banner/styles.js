import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;

  img {
    width: 100%;
    height: 100%;
  }

  .rec.rec-arrow {
    display: none;
  }
  .rec.rec-slider-container {
    margin: 0;
  }

  .rec.rec-carousel {
    background-color: #000;
  }

  .rec.rec-dot {
    margin-left: 2px;
    margin-top: -50px;
    z-index: 20;
    height: 10px;
    width: 10px;
    background: #bdbdbd;
    box-shadow: none;

    @media (max-width: 768px) {
      margin-top: -35px;
      z-index: 20;
      height: 7px;
      width: 7px;
    }
  }

  .rec.rec-dot_active {
    background: #f8475f;
    box-shadow: none;
  }
`;
