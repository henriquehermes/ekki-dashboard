import React from 'react';

import PaymentPortal from '../../components/PaymentPortal';
import CardBalance from '../../components/CardBalance';
import { Content, Cards } from './styles';

export default function Home() {
  return (
    <Content>
      <Cards>
        <CardBalance />
      </Cards>
      <PaymentPortal />
    </Content>
  );
}
