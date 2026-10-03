import { useState } from "react";
import { searchLogo, clear } from "../../assets";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    console.log("Searching for:", inputValue);

    // GET request here
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <img src={searchLogo} className="search-icon" alt="Search" />

        <input
          type="text"
          placeholder="Search films and live events"
          name="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {inputValue ? (
        <img
          src={clear}
          className="clear-icon"
          alt="Clear"
          onClick={() => setInputValue("")}
        />
      ) : null}
    </form>
  );
};

export default SearchBar;
