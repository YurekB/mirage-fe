import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  padding: 10px 80px;
  border-bottom: 1px solid black;

  button {
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 30px;
  }
`;

export const LoginButton = styled.button`
  height: 100%;
  width: 100px;
`;
