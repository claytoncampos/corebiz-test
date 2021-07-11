import styled from 'styled-components';

export const Container = styled.div`
  // width: max width var(--container);
  width: 100%;
  height: 80px;
  padding: 20px;
  background: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0 auto;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 340px;
  width: 100%;

  @media (max-width: 1240px) {
    margin: 0 100px;
  }

  .logo {
    width: 161px;
    height: 37px;
    margin: 0 30px;
  }

  nav {
    display: flex;
    width: 100%;
    max-width: 760px;
    margin-right: 30px;

    .input-search {
      display: flex;
      border-bottom: 1px solid #7a7a7a;
      margin-right: 44px;
      width: 100%;

      input {
        width: 100%;
        border: none;
        width: 100%;
      }

      input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
    }

    .my-account {
      display: flex;
      align-items: center;
      p {
        margin-left: 6px;
        color: #7a7a7a;
        white-space: nowrap;
      }
    }

    .buy-car {
      margin-left: 21px;
      display: flex;
      align-items: center;

      div {
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 14px;
        height: 14px;
        padding: 2px;
        background-color: #f8475f;
        border-radius: 50%;
      }

      p {
        font-size: 10px;
        color: #fff;
      }
    }
  }
`;
