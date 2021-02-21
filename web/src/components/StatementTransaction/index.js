import React from 'react';
import { Container } from './style';

function index(props) {
  const differentColors = (category) => {
    switch (category) {
      case (category = 'Depósito'):
        return '#00b563';
      case (category = 'Pagamento'):
        return '#b50052';
      case (category = 'Retirada'):
        return 'b56300';
      default:
        return null;
    }
  };

  return (
    <Container>
      <div>
        <p style={{ color: differentColors(props.category) }}>
          {props.category}
        </p>
      </div>
      <div>
        <p>R$ {props.amount}</p>
      </div>
      <div>
        <p>{props.created_at}</p>
      </div>
    </Container>
  );
}

export default index;
