import { ErrorText, InnerCont, LoginPageContainer } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sendRegisterDetails from "../../utils/sendRegisterDetails";
import { Notify } from "notiflix";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("Please fill in all details");

  const [displayError, setDisplayError] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const createAccount = () => {
    if (Object.values(values).includes("")) {
      setDisplayError(true);
    } else if (!values.email.includes("@") || !values.email.includes(".")) {
      setErrorMsg("Please make sure email is valid");
      setDisplayError(true);
    } else {
      sendRegisterDetails(values).then((res) => {
        if (res.data.msg === "EmailUsed") {
          setErrorMsg("Email has already been used");
          setDisplayError(true);
        } else {
          Notify.success("Your account has successfully been registered");
          navigate("/login", { state: { email: values.email } });
        }
      });
    }
  };

  return (
    <LoginPageContainer>
      <InnerCont>
        <h1 onClick={() => navigate("/")}>Register</h1>
        <div>
          <label>First Name</label>
          <input type="text" onChange={onChange} id="firstName" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={onChange} id="lastName" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" onChange={onChange} id="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={onChange} id="password" />
        </div>

        <div>
          <ErrorText show={displayError}>{errorMsg}</ErrorText>
        </div>
        <div>
          <button onClick={createAccount}>Create Account</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </InnerCont>
    </LoginPageContainer>
  );
};

export default RegisterPage;
