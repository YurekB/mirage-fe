import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../layout/header";
import { changeLoggedInUser } from "../../redux/loggedInUser";
import { logIn, logOut } from "../../redux/login";
import sendLoginDetails from "../../utils/sendLoginDetails";
import { ErrorText, InnerCont, LoginPageContainer } from "./styles";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const { email } = state;

  const [displayError, setDisplayError] = useState(false);

  const [values, setValues] = useState({
    email: location.state?.email === undefined ? "" : location.state.email,
    password: "",
  });

  const logInFunc = () => {
    sendLoginDetails(values)
      .then((res) => {
        dispatch(changeLoggedInUser(values.email));
        if (res.data.result === "error") {
          Notify.failure("Incorrect email/password");
          setDisplayError(true);
        } else {
          dispatch(logIn());
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return (
    <LoginPageContainer>
      <InnerCont>
        <h1 onClick={() => navigate("/")}>Log in</h1>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={onChange}
            id="email"
            value={values.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={onChange} id="password" />
        </div>
        <div>
          <ErrorText show={displayError}> Incorrect email / password</ErrorText>
        </div>
        <div>
          <button onClick={logInFunc}>Log in</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </InnerCont>
    </LoginPageContainer>
  );
};

export default LoginPage;
