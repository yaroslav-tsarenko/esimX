import { useMemo } from "react";
import "./BackgroundBorderShadow2.css";

const BackgroundBorderShadow2 = ({
  className = "",
  container,
  japan,
  prop,
  propMinWidth,
  backgroundBorderShadowFlexDirection,
  backgroundBorderShadowGap,
  frameDivAlignSelf,
  frameDivFlexDirection,
  frameDivWidth,
  frameDivMinWidth,
  frameDivAlignSelf1,
  frameDivFlex,
  onLinkContainerClick,
}) => {
  const japanStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const backgroundBorderShadowStyle = useMemo(() => {
    return {
      flexDirection: backgroundBorderShadowFlexDirection,
      gap: backgroundBorderShadowGap,
    };
  }, [backgroundBorderShadowFlexDirection, backgroundBorderShadowGap]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flexDirection: frameDivFlexDirection,
      width: frameDivWidth,
      minWidth: frameDivMinWidth,
    };
  }, [
    frameDivAlignSelf,
    frameDivFlexDirection,
    frameDivWidth,
    frameDivMinWidth,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivAlignSelf1]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  return (
    <div
      className={`backgroundbordershadow1 ${className}`}
      style={backgroundBorderShadowStyle}
    >
      <div className="backgroundbordershadow-inner" style={frameDivStyle}>
        <div className="frame-parent7" style={frameDiv1Style}>
          <div className="container-wrapper">
            <img className="container-icon" alt="" src={container} />
          </div>
          <div className="japan-parent" style={frameDiv2Style}>
            <div className="japan" style={japanStyle}>
              {japan}
            </div>
            <div className="from-5-parent">
              <div className="from-5">
                <span className="from">{`From `}</span>
                <span className="span">{prop}</span>
              </div>
              <div className="usd-wrapper">
                <div className="usd"> USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent8" onClick={onLinkContainerClick}>
        <div className="view-offers-wrapper">
          <u className="view-offers">{`View Offers `}</u>
        </div>
        <u className="east">east</u>
      </div>
    </div>
  );
};


export default BackgroundBorderShadow2;
