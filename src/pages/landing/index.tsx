import Header from "../../layout/header";
import { LandingPageContainer } from "./styles";

const LandingPage = () => {
  //TODO redux persist to not sign out on page refresh

  return (
    <LandingPageContainer>{/* <p>{loggedInUser}</p> */}</LandingPageContainer>
  );
};

export default LandingPage;
