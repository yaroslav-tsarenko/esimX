import { useMemo } from "react";
import "./Article1.css";

const Article1 = ({
  className = "",
  container,
  heading3LinkBestESIMForJa,
  areYouPlanningATripToJaka,
  wayToStayConnectedAnESIMC,
  avoidExpensiveRoamingChar,
  onYourUnlockedESIMCompati,
  compare,
  propDisplay,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const heading31Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const linkReadStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const horizontalBorderStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`article1 ${className}`}>
      <div className="link-wrapper1">
        <div className="link13">
          <img className="container-icon10" alt="" src={container} />
          <div className="gradient1" />
        </div>
      </div>
      <div className="article-inner">
        <div className="heading-3-link-best-esim-f-parent">
          <h2 className="heading-38" style={heading31Style}>
            {heading3LinkBestESIMForJa}
          </h2>
          <p className="are-you-planning-container7">
            <span className="are-you-planning4">
              {areYouPlanningATripToJaka}
            </span>
            <span className="way-to-stay">{wayToStayConnectedAnESIMC}</span>
            <span className="avoid-expensive-roaming">
              {avoidExpensiveRoamingChar}
            </span>
            <span className="on-your-unlocked">
              {onYourUnlockedESIMCompati}
            </span>
            <span className="compare">{compare}</span>
          </p>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="link-read-more-about-best-es-container">
          <b className="link-read1" style={linkReadStyle}>
            Read More »
          </b>
        </div>
        <div className="horizontalborder1" style={horizontalBorderStyle}>
          <input
            className="lila-bennett1"
            placeholder="Lila Bennett"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};


export default Article1;
