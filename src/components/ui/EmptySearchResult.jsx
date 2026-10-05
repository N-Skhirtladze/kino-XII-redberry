import { popcorn } from "../../assets";
import ResultBrowse from "./buttons/ResultBrowse";

const EmptySearchResult = () => {
    return (
        <div className="empty-search-result">
            <img src={popcorn} alt="" className="result-icon" />
            <p className="result-first-text">What do you want to watch?</p>
            <p className="result-second-text">Search by title, director or cast</p>
            <ResultBrowse />
        </div>
    );
};

export default EmptySearchResult;