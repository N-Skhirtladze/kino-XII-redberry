import { arrow } from "../../assets";

const CarouselNavigation = ({ setTime, setCurrentIndex, index }) => {
  
    const handleRightArrow = () => {
        setCurrentIndex((prev) => (prev + 1) % 4);
        setTime(0);
    }

    const handleLeftArrow = () => {
        setCurrentIndex((prev) => (prev - 1 + 4) % 4);
        setTime(0);
    }
  
  
    return (
    <div className="carousel-navigation">
      <div className="carousel-indicator">
        {[0, 1, 2, 3].map((i) => (
          <div className="white-layer" key={i}>
            {i === index && (
              <div
                key={index}
                className="time-tracker"
              />
            )}
          </div>
        ))}
      </div>
      <div className="carousel-arrows">
        <img src={arrow} alt="" className="left-arrow" onClick={handleLeftArrow} />
        <img
          src={arrow}
          alt=""
          className="right-arrow"
          style={{ transform: "rotate(180deg)" }}
          onClick={handleRightArrow}
        />
      </div>
    </div>
  );
};

export default CarouselNavigation;
