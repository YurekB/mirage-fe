import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoggedInUser } from "../../redux/loggedInUser";
import { logOut, logIn } from "../../redux/login";
import { HeaderContainer, LoginButton, LogoContainer } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedIn } = useSelector((state: any) => state.loggedIn || {});
  const { loggedInUser } = useSelector(
    (state: any) => state.loggedInUser || {}
  );

  const logOutFunc = () => {
    dispatch(logOut());
    dispatch(changeLoggedInUser(""));
    navigate("/");
  };

  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  ) {
    return <div></div>;
  } else {
    return (
      <HeaderContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <h2>Mirage</h2>
          <p>We have what you need</p>
        </LogoContainer>
        {loggedIn ? (
          <LogoContainer>
            <p>{loggedInUser}</p>
            <button onClick={() => navigate("/profile")}>Profile</button>

            <button onClick={logOutFunc}>Logout</button>
          </LogoContainer>
        ) : (
          <LogoContainer>
            <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          </LogoContainer>
        )}
      </HeaderContainer>
    );
  }
};

export default Header;
