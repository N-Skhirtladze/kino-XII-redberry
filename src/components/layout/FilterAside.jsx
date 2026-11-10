// src/components/layout/FilterAside.jsx
import { use, useEffect, useState } from "react";
import FilterOption from "../ui/FilterOption";

const FilterAside = () => {
  const [filterOptions, setFilterOptions] = useState({
    venues: [],
    formats: [],
    languages: [],
    bands: [],
  });
  const [selectedObject, setSelectedObject] = useState({});
  const [activeFilters, setActiveFilter] = useState(0);
  const [clearFilters, setClearFilters] = useState(false);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch(
          "https://api.kinoxii.redberryinternship.ge/api/filter-options",
        );
        const data = await response.json();
        setFilterOptions({
          venues: data.data.venues,
          formats: data.data.formats,
          languages: data.data.languages,
          bands: data.data.timeBands,
        });
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchFilterOptions();
  }, []);

  const handleClearFilters = () => {
    setSelectedObject({});
    setActiveFilter(0);
    setClearFilters(true);
  };

  const renderOption = (option) => (
    <FilterOption
      key={option}
      title={option === "bands" ? "TIME OF DAY" : option.toUpperCase()}
      options={filterOptions[option]}
      setSelectedObject={setSelectedObject}
      selectedObject={selectedObject}
      activeFilters={activeFilters}
      setActiveFilter={setActiveFilter}
      clearFilters={clearFilters}
      setClearFilters={setClearFilters}
    />
  );

  return (
    <aside className="filter-aside">
      <h2>Filters</h2>
      <div className="filter-options">
        {Object.keys(filterOptions).map(renderOption)}
      </div>
      {activeFilters > 0 && (<button onClick={handleClearFilters} >Clear Filters</button>)}
      
      <p className="filter-count" style={{marginTop: activeFilters > 0 ? "12px" : "67px"}}>{activeFilters} filters active</p>
    </aside>
  );
};

export default FilterAside;
