// src/components/ui/FilterOption.jsx
import { useEffect, useState } from "react";

const FilterOption = ({
  title,
  options,
  setSelectedObject,
  selectedObject,
  setActiveFilter,
  clearFilters,
  setClearFilters,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const criteria =
    title.toLowerCase().replace(/ /g, "") === "timeofday"
      ? "bands"
      : title.toLowerCase();

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setClearFilters(false);
    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
      setActiveFilter((prev) => prev + 1);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
      setActiveFilter((prev) => prev - 1);
    }

    selectedObject[criteria] = selectedOptions;
    console.log("Selected Options:", selectedOptions);
    setSelectedObject((prev) => ({ ...prev, ...selectedObject }));
    console.log("Selected Object:", selectedObject);
  };

  useEffect(() => {
    if (clearFilters) {
      setSelectedOptions([]);
      setClearFilters(false);
    }
  }, [clearFilters]);

  return (
    <div className="filter-option">
      <h3>{title}</h3>
      <div className="checkboxes">
        {options.map((option) => (
          <label key={option.id}>
            <input
              type="checkbox"
              value={title === "TIME OF DAY" ? option.id : option.slug}
              checked={selectedOptions?.includes(
                title === "TIME OF DAY" ? option.id : option.slug,
              )}
              onChange={handleCheckboxChange}
            />
            {title.toLowerCase() === "venues" ? (
              <span>
                {option.name}{" "}
                <span style={{ color: "#a9a9a9", fontSize: "12px" }}>
                  · {option.city}
                </span>
              </span>
            ) : title === "TIME OF DAY" ? (
              <span>
                {option.label.slice(0, option.label.indexOf(" "))}
                <span style={{ color: "#a9a9a9", fontSize: "12px" }}>
                  {" "}
                  · {option.label.slice(option.label.indexOf(" ") + 2, option.label.length - 1)}
                </span>
              </span>
            ) : (
              <span>{option.name}</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterOption;
