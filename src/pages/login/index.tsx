import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, logOut } from "../../redux/login";
import sendLoginDetails from "../../utils/sendLoginDetails";
import { InnerCont, LoginPageContainer } from "./styles";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const logInFunc = () => {
    sendLoginDetails(values);
    // dispatch(logIn());
    // navigate("/");
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return (
    <LoginPageContainer>
      <InnerCont>
        <h1 onClick={() => navigate("/")}>Log In</h1>
        <div>
          <label>Email</label>
          <input type="text" onChange={onChange} id="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={onChange} id="password" />
        </div>
        <p>Register</p>

        <button onClick={logInFunc}>Log in</button>
      </InnerCont>
    </LoginPageContainer>
  );
};

export default LoginPage;
