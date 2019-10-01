import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
  background: ${props => props.theme.White};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.05);

  & > h2 {
    color: ${props => props.theme.DarkLateGray};
    font-size: 25px;
    margin-bottom: 15px;
    font-weight: 500;

    & > strong {
      font-weight: bold;
    }
  }
`;
