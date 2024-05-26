import { useMemo } from "react";
import "./BackgroundBorderShadow.css";

const BackgroundBorderShadow = ({
  className = "",
  container,
  andorra,
  prop,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propDebugCommit,
  propDebugCommit1,
  propMinWidth2,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const andorraStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth1, propDebugCommit]);

  const frameDiv5Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const from95Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const viewOffersStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const eastStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <div className={`backgroundbordershadow3 ${className}`}>
      <div className="backgroundbordershadow-inner1" style={frameDiv4Style}>
        <div className="frame-parent10">
          <div className="container-frame">
            <img className="container-icon2" alt="" src={container} />
          </div>
          <div className="andorra-parent">
            <div className="andorra" style={andorraStyle}>
              {andorra}
            </div>
            <div className="frame-parent11" style={frameDiv5Style}>
              <div className="from-95-wrapper">
                <div className="from-95" style={from95Style}>
                  <span className="from2">{`From `}</span>
                  <span className="span2">{prop}</span>
                </div>
              </div>
              <div className="usd2"> USD</div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-offers-group">
        <u className="view-offers2" style={viewOffersStyle}>{`View Offers `}</u>
        <u className="east2" style={eastStyle}>
          east
        </u>
      </div>
    </div>
  );
};


export default BackgroundBorderShadow;
