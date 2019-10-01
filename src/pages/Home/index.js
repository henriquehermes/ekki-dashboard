import React from 'react';

import { Container } from './styles';
import Body from './Body';
import Menu from '../../components/Menu';

export default function Home() {
  return (
    <Container>
      <Menu />
      <Body />
    </Container>
  );
}
