import { useState } from "react";
import FilterAside from "../components/layout/FilterAside";
import Header from "../components/layout/Header";

const SessionsPage = () => {
  const [selectedObject, setSelectedObject] = useState({});
  const [filterOptions, setFilterOptions] = useState({
    venues: [],
    formats: [],
    languages: [],
    bands: [],
  });
  const [sortOptions, setSortOptions] = useState([]);
  return (
    <>
      <Header />
      <div className="sessions-page-title">
        <h1>Sessions</h1>
        <p>Browse showtimes across all venues</p>
      </div>
      <div className="sessions-page-content">
        <FilterAside
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          sortOptions={sortOptions}
          setSortOptions={setSortOptions}
        />
        <div className="sessions-page-movies">
          <div className="sessions-page-header"></div>
          {/* Movies will be displayed here */}
        </div>
      </div>
    </>
  );
};

export default SessionsPage;