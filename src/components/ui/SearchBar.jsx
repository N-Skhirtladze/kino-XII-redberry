import { useState } from "react";
import { searchLogo, clear } from "../../assets";
import { getSearchedMoveis } from "../../services/movie";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    console.log("Searching for:", inputValue);

    // GET request here
  };

  const handleChange = async (e) => {
    setInputValue(e.target.value);
    const data = await getSearchedMoveis(inputValue);
    setSearchData(data);
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-input-container">
          <img src={searchLogo} className="search-icon" alt="Search" />

          <input
            type="text"
            placeholder="Search films and live events"
            name="search"
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
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
      {showResults ? (
        <SearchResult data={searchData} searchValue={inputValue} />
      ) : null}
    </>
  );
};

export default SearchBar;
