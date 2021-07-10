import styled from 'styled-components';

export const Block = styled.div`
  width: 65px;
  height: 0;
  border-bottom: 4px solid #c0c0c0;
  margin: 16px 0;

  @media (max-width: 500px) {
    margin-left: 16px;
    width: 32.5px;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  height: 501px;
  margin-top: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 501px;
  padding: 0 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 900;
    font-size: 20px;
    line-height: 27px;

    @media (max-width: 768px) {
      margin-left: 16px;
    }
  }

  @media (max-width: 1340px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  .rec.rec-dot {
    display: none;

    @media (max-width: 768px) {
      display: block;
      height: 7px;
      width: 7px;
      background: #bdbdbd;
      box-shadow: none;
    }
  }

  .rec.rec-slider-container {
    margin: 0;
  }

  .rec.rec-dot_active {
    background: #f8475f;
    box-shadow: none;
  }

  .rec.rec-arrow {
    background-color: transparent;
    box-shadow: none;
    color: #000;
    opacity: 1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .rec.rec-carousel-wrapper {
    width: 100%;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 216px;
    height: 353px;
    padding: 16px;
    position: relative;

    .promo-card {
      position: absolute;
      top: 0;
      right: 0;
      width: 81px;
    }

    img {
      width: 100%;
      margin: 8px 0;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    p {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #7a7a7a;
      /* margin-bottom: 8px; */
    }

    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      margin-bottom: 8px;
    }
    button {
      border: none;
      width: 125.28px;
      height: 32.42px;
      background: #000000;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
    }

    .stars-container {
      display: flex;
    }

    .list-price {
      text-decoration: line-through;
    }
  }

  .active-carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 216px;
    height: 353px;
    padding-bottom: 16px;
    position: relative;

    background: #e6e8ea;

    .promo-card {
      position: absolute;
      top: 0;
      right: 0;
      width: 81px;
    }

    img {
      width: 100%;
      margin: 8px 0;
      margin-top: 0;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0 12px;
      }
    }

    p {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #7a7a7a;
      /* margin-bottom: 8px; */
    }

    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      margin-bottom: 8px;
    }
    button {
      border: none;
      width: 125.28px;
      height: 32.42px;
      background: #000000;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
    }

    .stars-container {
      display: flex;
    }

    .list-price {
      text-decoration: line-through;
    }
  }
`;
