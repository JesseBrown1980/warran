import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 250px;
  }

  @media (max-width: 425px) {
    & > img {
      width: 150px;
    }
  }
`;

export const Button = styled.button`
  background-color: #24292e;
  color: #f5f5f5;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 20px;
`;
