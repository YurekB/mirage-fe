import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, logOut } from "../../redux/login";
import { LoginPageContainer } from "./styles";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const { loggedIn } = useSelector((state: any) => state.loggedIn || {});

  useEffect(() => {
    setUserLoggedIn(loggedIn);
  }, [loggedIn]);

  const logInFunc = () => {
    dispatch(logIn());
    navigate("/");
  };

  return (
    <LoginPageContainer>
      <h1 onClick={() => navigate("/")}>HOME</h1>
      <p>{`${userLoggedIn}`}</p>
      <button onClick={() => dispatch(logOut())}>Log out</button>
      <button onClick={logInFunc}>Log in</button>
    </LoginPageContainer>
  );
};

export default LoginPage;
