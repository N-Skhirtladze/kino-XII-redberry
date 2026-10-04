import { tktIcon } from "../../../assets";

const HeroBuyTkt = () => {
    return (
        <div className="hero-buy-tkt-button">
            <img src={tktIcon} alt="Tickets" className="hero-buy-tkt-icon" />
            <p className="hero-buy-tkt-text">Buy Tickets</p>
        </div>
    );
};

export default HeroBuyTkt;