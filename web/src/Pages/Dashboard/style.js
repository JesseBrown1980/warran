import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const TransactionButton = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 100px;
  line-height: 24px;
  background-color: var(--pink);
  color: var(--white);
  cursor: pointer;
  border: none;
  padding: 8px 24px;
  letter-spacing: 0;
  font-weight: 600;
`;
