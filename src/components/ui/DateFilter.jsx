import { useEffect, useRef } from "react";

const DateFilter = ({
  selectedObject,
  setSelectedObject,
  setActiveFilter,
  setSelectedDate,
  selectedDate
}) => {
  const listRef = useRef(null);
  const dates = [];
  const today = new Date();
  const isSameDay = (d1, d2) =>
    d1?.getMonth() === d2?.getMonth() && d1?.getDate() === d2?.getDate();

  for (let i = 0; i < 31; i++) {
    const eachDay = new Date(today);
    eachDay.setDate(today.getDate() + i);
    dates.push(eachDay);
  }

  useEffect(() => {
      const list = listRef.current;
      const handleWheel = (e) => {
        e.preventDefault();
        list.scrollLeft += e.deltaY;
      };
  
      list.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        list.removeEventListener("wheel", handleWheel);
      };
    }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (isSameDay(selectedDate, date)) {
      setActiveFilter((prev) => prev - 1);
      setSelectedDate(null);
    } else if (!selectedDate && date) {
      setActiveFilter((prev) => prev + 1);
      setSelectedDate(date);
    } else {
      setSelectedDate(date);
    }
    const dateForObject = selectedDate?.toLocaleDateString("en-CA");
    if (selectedDate) {
      selectedObject["date"] = dateForObject;
      setSelectedObject((prev) => ({ ...prev, ...selectedObject }));
    }
    console.log("Selected Object:", selectedObject);
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="date-filter">
      <h3>DATE</h3>
      <div className="dates" ref={listRef}>
        {dates.map((date) => {
          const weekday = date.toLocaleString("en", { weekday: "short" });
          const isSelected = selectedDate && isSameDay(selectedDate, date);
          return (
            <div className={`each-date ${isSelected ? "selected" : ""}`} key={date.toISOString()}>
              <label className="day">
                <input
                  type="radio"
                  name="date"
                  onChange={() => handleDateChange(date)}
                />
                <span className="week-day">{weekday}</span>
                <span className="day-number">{date.getDate()}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DateFilter;
