import React, { useState } from 'react';
import SkeletonTransaction from '../../components/SkeletonTransaction';
import StatementTransaction from '../../components/StatementTransaction';
import { Container } from './style';

function Statement(props) {
  const loading = props.loading;
  const statement = props.statement;

  return (
    <Container>
      <h2>Últimas movimentações</h2>
      <div>
        {loading && !statement && <SkeletonTransaction transactions={5} />}
        {statement &&
          statement.map((transaction,index) => {
            return (
              <StatementTransaction
                loading={loading}
                category={transaction.category}
                created_at={transaction.created_at}
                amount={transaction.amount}
                key={index}
              />
            );
          })}
      </div>
    </Container>
  );
}

export default Statement;
