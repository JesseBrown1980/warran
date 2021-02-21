import styled from 'styled-components';

export const Overlay = styled.div``;

export const ModalContent = styled.div`
  width: 500px;
  background-color: var(--white);
  z-index: 4;
`;

export const ModalHeader = styled.div`
  padding: 10px;

  h3 {
    margin: 0;
    padding: 10px 0;
    color: var(--pink);
  }
`;

export const ModalBody = styled.div`
  padding: 25px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  form {
    display: flex;
    flex-direction: column;
    label {
      padding: 10px;
      font-size: 14px;
    }
    input {
      padding: 10px;
      font-size: 18px;
    }
    button {
      margin-top: 15px;
      font-size: 18px;
      text-transform: uppercase;
      border-radius: 100px;
      line-height: 24px;
      background-color: var(--pink);
      color: var(--white);
      cursor: pointer;
      border: none;
      padding: 8px 12px;
      letter-spacing: 0;
      font-weight: 600;
      width: auto;
    }
  }
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
