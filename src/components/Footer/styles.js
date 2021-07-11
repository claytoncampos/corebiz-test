import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background-color: black;
`;
export const Content = styled.div`
  max-width: 1280px;
  height: 213px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #fff;
  margin: 0 auto;

  @media (max-width: 480px) {
    height: 386px;
    display: block;
    padding: 16px;
  }

  div {
    h1 {
      font-size: 20px;
    }
    .border {
      width: 44.94px;
      height: 0;
      border-bottom: 5px solid #ffffff;
      margin: 16px 0;
    }

    > p {
      font: 600;
      font-size: 12px;
      padding: 2px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 38px;
    background: #ffffff;
    border-radius: 5px;
    border: none;
    margin: 16px 0;
    margin-top: 30px;

    img {
      margin-right: 12px;
    }
    p {
      font-weight: bold;
    }

    @media (max-width: 480px) {
      margin-left: 61px;
      margin-bottom: 24px;
    }
  }

  .small-logos {
    display: flex;

    @media (max-width: 480px) {
      margin-left: 20px;
    }
  }

  .small-logo {
    margin: 0 24px;

    @media (max-width: 480px) {
      margin-left: 40px;
    }
  }
`;
