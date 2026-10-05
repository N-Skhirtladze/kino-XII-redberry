import EmptySearchResult from "./EmptySearchResult";
import NoResult from "./NoResult";
import ResultMovies from "./ResultMovies";

const SearchResult = ({ data, searchValue }) => {
  function renderResults(data, searchValue) {
    if (data.length === 0 && searchValue) {
      return <NoResult searchValue={searchValue} />;
    }

    if (!searchValue) {
      return <EmptySearchResult />;
    }

    return <ResultMovies movies={data}/>
  }

  return (
    <div className="search-result">{renderResults(data, searchValue)}</div>
  );
};

export default SearchResult;
