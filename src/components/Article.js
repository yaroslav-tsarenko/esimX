import { useMemo } from "react";
import "./Article.css";

const Article = ({
  className = "",
  container,
  heading3LinkDoesHuaweiP20,
  iveGotAHuaweiP20AndImCuri,
  anyHuaweiPhonesThatDoAndH,
  eSIMOnThoseModels,
  propAlignSelf,
  propDebugCommit,
  propFlex,
  propMinWidth,
  propAlignSelf1,
  propFlex1,
  propAlignSelf2,
  propDisplay,
  onLinkContainer2Click,
}) => {
  const article1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propDebugCommit, propFlex, propMinWidth]);

  const frameDiv6Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const frameDiv7Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const frameDiv8Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const heading32Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`article2 ${className}`} style={article1Style}>
      <div className="link14" onClick={onLinkContainer2Click}>
        <img className="container-icon11" alt="" src={container} />
        <div className="gradient2" />
      </div>
      <div className="article-child" style={frameDiv6Style}>
        <div className="frame-parent17" style={frameDiv7Style}>
          <div
            className="heading-3-link-does-huawei-parent"
            style={frameDiv8Style}
          >
            <h2 className="heading-39" style={heading32Style}>
              {heading3LinkDoesHuaweiP20}
            </h2>
            <p className="ive-got-a-container1">
              <span className="ive-got-a1">{iveGotAHuaweiP20AndImCuri}</span>
              <span className="any-huawei-phones">
                {anyHuaweiPhonesThatDoAndH}
              </span>
              <span className="esim-on-those">{eSIMOnThoseModels}</span>
            </p>
          </div>
          <b className="link-read3">Read More »</b>
        </div>
      </div>
      <div className="horizontalborder3">
        <input
          className="dennis-terry"
          placeholder="Dennis Terry"
          type="text"
        />
      </div>
    </div>
  );
};



export default Article;
