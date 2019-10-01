import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.DarkCyan};
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  background: linear-gradient(#fff, #fffcf3);
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 92%;
  height: 100%;
  right: 0;
  position: absolute;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  z-index: 9999;
  animation: slideToRight 1s forwards;
  padding-left: 50px;

  @keyframes slideToRight {
    0% {
      width: 100%;
    }
    100% {
      width: 92%;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 20px;
`;
