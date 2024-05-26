import { useMemo } from "react";
import "./PopularOfferCardBackgrounds.css";

const PopularOfferCardBackgrounds = ({
  className = "",
  container,
  japan20GB30Days,
  container1,
  container2,
  unitedStates20GB30Days,
  container3,
  propMinWidth,
  onLinkContainer2Click,
}) => {
  const containerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`popular-offer-card-backgrounds ${className}`}>
      <div className="backgroundbordershadow5">
        <div className="backgroundbordershadow-inner2">
          <div className="frame-parent12">
            <div className="container-wrapper2">
              <img className="container-icon5" alt="" src={container} />
            </div>
            <div className="japan-20gb-30days-parent">
              <div className="japan-20gb-30days">{japan20GB30Days}</div>
              <div className="popular-offer-card-prices">
                <b className="container2" style={containerStyle}>
                  {container1}
                </b>
                <div className="popular-offer-card-price-value">
                  <div className="usd5"> USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent13">
          <div className="buy-now-wrapper">
            <a className="buy-now">{`Buy Now `}</a>
          </div>
          <u className="east4">east</u>
        </div>
      </div>
      <div className="backgroundbordershadow6">
        <div className="container-wrapper3">
          <img className="container-icon6" alt="" src={container2} />
        </div>
        <div className="united-states-20gb-30days-parent">
          <div className="united-states-20gb">{unitedStates20GB30Days}</div>
          <div className="usa-indonesia-price">
            <b className="container3">{container3}</b>
            <div className="usa-indonesia-u-s-d">
              <div className="usd6"> USD</div>
            </div>
          </div>
          <div className="indonesia-offer-btn">
            <div className="link4" onClick={onLinkContainer2Click}>
              <div className="indonesia-button-direction">
                <a className="buy-now1">{`Buy Now `}</a>
              </div>
              <u className="east5">east</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default PopularOfferCardBackgrounds;
