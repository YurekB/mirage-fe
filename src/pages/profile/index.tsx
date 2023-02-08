import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getUserDetails from "../../utils/getUserDetails";
import updateDetails from "../../utils/updateDetails";
import {
  BottomRow,
  CancelBtn,
  Cont,
  Inner,
  ProfilePageContainer,
  TopRow,
} from "./styles";

const ProfilePage = () => {
  const [locked, setLocked] = useState(true);
  const [btnText, setBtnText] = useState("Edit");
  const [savedDetails, setSavedDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loggedInUser } = useSelector(
    (state: any) => state.loggedInUser || {}
  );

  useEffect(() => {
    getUserDetails(loggedInUser).then((res: any) => {
      console.log(res.data.data, "RESPONSE");
      const { firstName, lastName, email, password } = res.data.data;
      setDetails({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
    });
  }, []);

  const toggleEdit = () => {
    if (locked) {
      setSavedDetails({ ...details });
      setLocked(false);
      setBtnText("Confirm");
    } else {
      updateDetails(details);
      setLocked(true);
      setBtnText("Edit");
    }
  };

  const changeDetails = (e: any) => {
    const { value, id } = e.target;

    setDetails({
      ...details,
      [id]: value,
    });
  };

  const cancelFunc = () => {
    setLocked(true);
    setBtnText("Edit");

    setDetails(savedDetails);
  };

  return (
    <ProfilePageContainer>
      <Inner>
        <h1>Your Details</h1>
        <TopRow>
          <Cont>
            <label>First Name</label>
            <input
              placeholder={details.firstName}
              disabled={locked}
              value={details.firstName}
              onChange={changeDetails}
              id="firstName"
            />
          </Cont>
          <Cont>
            <label>Last Name</label>
            <input
              placeholder={details.lastName}
              disabled={locked}
              value={details.lastName}
              onChange={changeDetails}
              id="lastName"
            />
          </Cont>
        </TopRow>
        <BottomRow>
          <Cont>
            <label>Email</label>
            <input
              placeholder={details.email}
              disabled
              value={details.email}
              onChange={changeDetails}
              id="email"
            />
          </Cont>
          <Cont>
            <label>Password</label>
            <input
              type="password"
              placeholder={details.password}
              disabled
              value={details.password}
              onChange={changeDetails}
              id="password"
            />
          </Cont>
        </BottomRow>
        <button onClick={toggleEdit}>{btnText}</button>
        {!locked ? <CancelBtn onClick={cancelFunc}>Cancel</CancelBtn> : ""}
        <button onClick={() => navigate("/change-password")}>
          Change Password
        </button>
      </Inner>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
