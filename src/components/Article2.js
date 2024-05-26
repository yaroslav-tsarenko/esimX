import { useMemo } from "react";
import "./Article2.css";

const Article2 = ({
  className = "",
  container,
  heading3LinkBestESIMForDu,
  areYouPlanningATripToDuba,
  connectedIveGotYouCovered,
  needToKnowAboutUsingAnESI,
  topDubaiESIMPlansFor,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propDebugCommit,
  propDisplay,
  onLinkContainerClick,
}) => {
  const articleStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
    };
  }, [propFlex, propMinWidth, propAlignSelf, propDebugCommit]);

  const heading3Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`article ${className}`} style={articleStyle}>
      <div className="link-frame">
        <div className="link12" onClick={onLinkContainerClick}>
          <img
            className="container-icon9"
            loading="lazy"
            alt=""
            src={container}
          />
          <div className="gradient" />
        </div>
      </div>
      <div className="dubai-jakarta-headings-wrapper">
        <div className="dubai-jakarta-headings">
          <h2 className="heading-37" style={heading3Style}>
            {heading3LinkBestESIMForDu}
          </h2>
          <p className="are-you-planning-container6">
            <span className="are-you-planning3">
              {areYouPlanningATripToDuba}
            </span>
            <span className="connected-ive-got">
              {connectedIveGotYouCovered}
            </span>
            <span className="need-to-know">{needToKnowAboutUsingAnESI}</span>
            <span className="top-dubai-esim">{topDubaiESIMPlansFor}</span>
          </p>
        </div>
      </div>
      <div className="link-read-more-about-best-es-wrapper">
        <b className="link-read">Read More »</b>
      </div>
      <div className="horizontalborder">
        <input
          className="lila-bennett"
          placeholder="Lila Bennett"
          type="text"
        />
      </div>
    </div>
  );
};


export default Article2;
