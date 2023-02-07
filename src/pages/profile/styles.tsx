import styled from "styled-components";

export const ProfilePageContainer = styled.div``;

export const Inner = styled.div`
  margin: 50px 80px;

  h1 {
    margin-bottom: 50px;
  }

  button {
    width: 200px;
    height: 38px;
    cursor: pointer;
    margin-top: 50px;
    margin-right: 20px;
  }
`;

export const TopRow = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 20px;
`;

export const BottomRow = styled.div`
  flex-direction: row;
  display: flex;
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 200px;
    height: 28px;
    margin-right: 20px;
    padding-left: 10px;
  }
`;

export const CancelBtn = styled.button`
  background: #db6161;
  :hover {
    background: #b93e3e;
  }
`;
