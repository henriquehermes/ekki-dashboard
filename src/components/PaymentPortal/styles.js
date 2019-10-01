import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background: ${props => props.theme.GhostWhite};
  padding: 40px 30px;

  & > h2 {
    color: ${props => props.theme.DarkLateGray};
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 30px;
  }
`;

export const Box = styled.div`
  background: ${props => props.theme.MediumLateBlue};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 50px;

  & > div {
    h3 {
      color: ${props => props.theme.White};
      font-weight: bold;
      margin-bottom: 3px;
    }

    h4 {
      color: ${props => props.theme.White};
      font-weight: 300;
    }
  }
`;

export const PigImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const BoxFinal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & > h1 {
    font-weight: bold;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  background: ${props => props.theme.Khaki};
  border: 0;
  padding: 15px;

  & > h2 {
    color: ${props => props.theme.DarkLateGray};
  }
`;

export const BoxTransaction = styled.div`
  margin-bottom: 50px;

  & > h5 {
    color: ${props => props.theme.DarkGray};
  }
`;
