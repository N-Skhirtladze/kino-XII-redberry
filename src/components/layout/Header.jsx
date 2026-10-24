import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import SignUp from "../ui/buttons/SignUp";
import LogIn from "../ui/buttons/LogIn";
import { useState } from "react";
import SignUpPage from "../../pages/SignUpPage";

const Header = () => {
  const [displaySignUp, setDisplaySignUp] = useState(true);

  return (
    <>
      <header>
        <div className="header-left">
          <Logo />
          <p className="sessions">Sessions</p>
        </div>
        <div className="header-right">
          <SearchBar />
          <div className="header-buttons">
            <SignUp setDisplaySignUp={setDisplaySignUp} />
            <LogIn />
          </div>
        </div>
      </header>
      {displaySignUp && <SignUpPage setDisplaySignUp={setDisplaySignUp}/>}
    </>
  );
};

export default Header;
