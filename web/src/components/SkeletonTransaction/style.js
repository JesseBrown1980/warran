import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 650px;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }

  div:nth-of-type(1) {
    width: 50%;
    margin: 0 10px;
  }

  div:nth-of-type(2) {
    width: 20%;
    margin: 0 5px;
  }

  div:nth-of-type(3) {
    width: 30%;

    p {
      font-size: 12px;
    }
  }
`;
