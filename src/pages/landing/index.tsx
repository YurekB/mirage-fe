import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../layout/header";
import { LandingPageContainer } from "./styles";

const LandingPage = () => {
  const { loggedIn } = useSelector((state: any) => state.loggedIn || {});
  const { loggedInUser } = useSelector(
    (state: any) => state.loggedInUser || {}
  );

  //TODO redux persist to not sign out on page refresh

  return (
    <LandingPageContainer>
      <Header />
      <p>{loggedInUser}</p>
    </LandingPageContainer>
  );
};

export default LandingPage;
