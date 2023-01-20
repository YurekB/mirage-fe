import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut, logIn } from "../../redux/login";
import { HeaderContainer } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <button onClick={() => navigate("/login")}>Go to login</button>
    </HeaderContainer>
  );
};

export default Header;
