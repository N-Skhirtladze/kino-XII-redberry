import { noResult } from "../../assets";
import ResultBrowse from "./buttons/ResultBrowse";
const NoResult = ({ searchValue }) => {
  return (
    <div className="no-result">
      <img src={noResult} alt="" className="result-icon" />
      <p className="result-first-text">No results for “{searchValue}”</p>
      <p className="result-second-text">Check the spelling or try another film or live event.</p>
      <ResultBrowse />
    </div>
  );
};

export default NoResult;