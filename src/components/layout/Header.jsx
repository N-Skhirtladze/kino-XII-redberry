import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import SignUp from "../ui/buttons/SignUp";
import LogIn from "../ui/buttons/LogIn";
import { useState } from "react";
import SearchResult from "../ui/SearchResult";

const Header = () => {
  

  return (
    <header>
      <div className="header-left">
        <Logo />
        <p className="sessions">Sessions</p>
      </div>
      <div className="header-right">
        <SearchBar />
        <div className="header-buttons">
          <SignUp />
          <LogIn />
        </div>
      </div>
    </header>
  );
};

export default Header;
