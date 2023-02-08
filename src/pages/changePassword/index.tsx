import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getUserDetails from "../../utils/getUserDetails";
import updateDetails from "../../utils/updateDetails";
import { ChangePassContainer, FirstStepCont, SecondStepCont } from "./styles";

const ChangePassPage = () => {
  const [passwordEntered, setPasswordEntered] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const { loggedInUser } = useSelector(
    (state: any) => state.loggedInUser || {}
  );

  useEffect(() => {
    getUserDetails(loggedInUser).then((res) => {
      setOldPassword(res.data.data.password);
    });
  }, []);

  const stepOne = (e: any) => {
    if (value === oldPassword) {
      setPasswordEntered(true);
    } else {
      Notify.failure("Password is incorrect");
    }
  };

  const stepTwo = () => {
    const data = {
      email: loggedInUser,
      password: value,
    };

    updateDetails(data).then((res) => {
      if (res.data.success) {
        Notify.success("Password successfully updated");
        navigate("/");
      } else {
        Notify.failure("Sorry something went wrong");
      }
    });
  };

  return (
    <ChangePassContainer>
      {!passwordEntered ? (
        <FirstStepCont>
          <h1>Please enter your current password</h1>
          <input onChange={(e) => setValue(e.target.value)} type="password" />
          <button onClick={stepOne}>Confirm</button>
        </FirstStepCont>
      ) : (
        <SecondStepCont>
          <h1>Please enter new password</h1>
          <input onChange={(e) => setValue(e.target.value)} type="password" />
          <button onClick={stepTwo}>Confirm</button>
        </SecondStepCont>
      )}
    </ChangePassContainer>
  );
};

export default ChangePassPage;
