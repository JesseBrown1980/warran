import React, { useState } from 'react';
import { Container } from './style';
import Skeleton from 'react-loading-skeleton';
import {
  capitalizeFirstNameLetter,
  replaceDotWithComma,
} from '../../utils/informationFormatters';

function Header(props) {
  const loading = props.loading;
  let name;
  let balance;

  if (!loading) {
    name = capitalizeFirstNameLetter(props.userInformation.name);
    balance = replaceDotWithComma(props.userInformation.balance);
  }

  return (
    <Container>
      {!loading && <h1>Olá, {name}</h1>}
      {loading && (
        <Skeleton width={350} height={50} style={{ marginBottom: 12 }} />
      )}
      {!loading && <p>O seu saldo é R${balance}</p>}
      {loading && (
        <Skeleton width={230} height={24} style={{ marginTop: 16 }} />
      )}
    </Container>
  );
}

export default Header;
