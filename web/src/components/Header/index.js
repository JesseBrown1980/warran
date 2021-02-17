import React from 'react';

function Header(props) {
  return (
    <div>
      <h1>Olá, {props.name}</h1>
      <p>O seu saldo é ${props.balance}</p>
    </div>
  );
}

export default Header;
