import { useSelector } from "react-redux";
import Header from "../../layout/header";
import { LandingPageContainer } from "./styles";

const LandingPage = () => {
  const { loggedIn } = useSelector((state: any) => state.loggedIn || {});

  return (
    <LandingPageContainer>
      <Header />
    </LandingPageContainer>
  );
};

export default LandingPage;
