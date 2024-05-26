import { useMemo } from "react";
import "./BackgroundBorderShadow1.css";

const BackgroundBorderShadow1 = ({
  className = "",
  container,
  thailand,
  prop,
  propGap,
  propWidth,
  propMinWidth,
  propFlex,
  propDisplay,
  propMinWidth1,
}) => {
  const backgroundBorderShadow1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const thailandStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={`backgroundbordershadow2 ${className}`}
      style={backgroundBorderShadow1Style}
    >
      <div className="backgroundbordershadow-child" style={frameDiv3Style}>
        <div className="frame-parent9">
          <div className="container-container">
            <img className="container-icon1" alt="" src={container} />
          </div>
          <div className="thailand-parent">
            <div className="thailand" style={thailandStyle}>
              {thailand}
            </div>
            <div className="from-6-parent">
              <div className="from-6">
                <span className="from1">{`From `}</span>
                <span className="span1">{prop}</span>
              </div>
              <div className="usd-container">
                <div className="usd1"> USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-offers-parent">
        <u className="view-offers1">{`View Offers `}</u>
        <u className="east1">east</u>
      </div>
    </div>
  );
};


export default BackgroundBorderShadow1;
