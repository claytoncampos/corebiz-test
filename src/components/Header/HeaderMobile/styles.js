import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .logo {
      width: 109px;
      height: 25px;
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

export const InputSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #7a7a7a;
  padding: 4px;

  input {
    margin-top: 4px;
    margin-right: 8px;
    width: 96%;
    border: none;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
