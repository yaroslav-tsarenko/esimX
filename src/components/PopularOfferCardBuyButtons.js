import { useMemo } from "react";
import "./PopularOfferCardBuyButtons.css";

const PopularOfferCardBuyButtons = ({
  className = "",
  container,
  thailand50GB10DaysWith,
  calls,
  sVG,
  propMarginTop,
  propPadding,
  propMinWidth,
}) => {
  const popularOfferCardBuyButtonsStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
      padding: propPadding,
    };
  }, [propMarginTop, propPadding]);

  const sVGStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`popular-offer-card-buy-buttons ${className}`}
      style={popularOfferCardBuyButtonsStyle}
    >
      <div className="popular-offer-card-buy-button">
        <div className="popular-offer-card-buy-button1">
          <img className="container-icon4" alt="" src={container} />
        </div>
        <div className="popular-offer-card-thailand">
          <div className="thailand-50gb-10days-container">
            <p className="thailand-50gb-10days">{thailand50GB10DaysWith}</p>
            <p className="calls">{calls}</p>
          </div>
          <div className="popular-offer-card-thailand-pr">
            <b className="svg" style={sVGStyle}>
              {sVG}
            </b>
            <div className="popular-offer-card-thailand-pr1">
              <div className="usd4"> USD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PopularOfferCardBuyButtons;
