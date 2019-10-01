import React from 'react';

import { Container, User } from './styles';

export default function Menu() {
  return (
    <Container>
      <User src={'https://api.adorable.io/avatars/s200/abott@adorable.png'} />
      <h3>Gerald Walfe</h3>
      <h4>@Wolfe</h4>
    </Container>
  );
}
