import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;

  h1 {
    color: var(--pink);
    font-size: 50px;
    font-weight: 800;
    margin: 5px 0;
  }

  p {
    font-size: 20px;
  }
`;
