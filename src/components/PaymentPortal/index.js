import React from 'react';

import {
  Container,
  Box,
  PigImage,
  BoxFinal,
  Button,
  BoxTransaction,
} from './styles';

export default function PaymentPortal() {
  return (
    <Container>
      <h2>Payment Portal</h2>
      <Box>
        <div>
          <h3>Credit</h3>
          <h4>
            Last updated at <br />
            11:31am 30 Aug 2019
          </h4>
        </div>
        <PigImage src={require('../../assets/pig.png')} />
      </Box>

      <BoxTransaction>
        <h2>Transaction</h2>
        <h5>Last 3 transactions</h5>
      </BoxTransaction>

      <BoxFinal>
        <h2>Total: </h2>
        <h1>R$ 13,200</h1>
      </BoxFinal>

      <Button>
        <h2>New Transaction</h2>
      </Button>
    </Container>
  );
}
