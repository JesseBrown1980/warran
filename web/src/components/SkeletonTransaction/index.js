import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container } from './style';

function SkeletonTransaction(props) {
  const skeletonRender = [...Array(props.transactions)].map((item, index) => {
    return (
      <Container key={index}>
        <div>
          <p>
            <Skeleton />
          </p>
        </div>
        <div>
          <Skeleton />
        </div>
        <div>
          <Skeleton />
        </div>
      </Container>
    );
  });

  return <div>{skeletonRender}</div>;
}

export default SkeletonTransaction;
