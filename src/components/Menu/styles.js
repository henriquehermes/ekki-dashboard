import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 100%;
  margin-left: -40px;

  & > h3 {
    color: white;
    animation: showUp 1s 1s backwards;
  }

  & > h4 {
    color: white;
    font-weight: 400;
    margin-top: 2px;
    animation: showUp 1.1s 1s backwards ease-in;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const User = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.2);
  animation: showUp 1s 1s backwards;
`;
