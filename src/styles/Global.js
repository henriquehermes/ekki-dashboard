import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,600,700,900&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

body {
  font: 14px 'Muli', sans-serif;
  background: linear-gradient(#fff, #fffcf3);
  color: #282a36;
  -webkit-font-smoothing: antialiased !important;
}

ul {
  list-style: none;
}
`;
