import React from 'react';
import Statement from '../Statement';
import Header from '../Header';
import { Container } from './style';

function Dashboard(props) {
  return (
    <div>
      <Container>
        <Header />
        <Statement />
      </Container>
    </div>
  );
}

export default Dashboard;
