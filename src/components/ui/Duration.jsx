import { timerIcon } from "../../assets";

const Duration = ({ duration }) => {
  return (
    <div className="duration">
      <img src={timerIcon} alt="Timer" className="duration-icon" />
      <p className="duration-text">{duration} Min</p>
    </div>
  );
};

export default Duration;
