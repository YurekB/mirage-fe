import styled from "styled-components";

export const LoginPageContainer = styled.div`
  margin: 25px;
`;

export const InnerCont = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  max-width: 850px;

  margin: 100px auto 0;
  padding: 50px 35px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    button:first-of-type {
      margin-top: 50px;
    }
  }

  div:nth-child(6) {
    height: 30px;
  }

  input {
    width: 200px;
    height: 20px;
    padding: 5px 10px;
  }

  button {
    width: 150px;
    height: 30px;
    margin-bottom: 10px;
  }
`;

interface props {
  show: boolean;
}

export const ErrorText = styled.p<props>`
  display: ${({ show }) => !show && "none"};
  font-size: 15px;
  color: #ff5151;
`;
