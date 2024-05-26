import { useMemo } from "react";
import "./ArticleColumns1.css";

const ArticleColumns1 = ({
  className = "",
  strongHowDoesESIMWork,
  strongWhichHandsetModelsH,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const borderStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const strongStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`article-columns5 ${className}`}>
      <div className="frame-parent18">
        <div className="frame-parent19">
          <div className="border-wrapper7">
            <div className="border27" />
          </div>
          <b className="strong-how8">{strongHowDoesESIMWork}</b>
        </div>
        <div className="esim-borders-parent">
          <div className="esim-borders">
            <div className="border28" style={borderStyle} />
          </div>
          <b className="strong1" style={strongStyle}>
            {strongWhichHandsetModelsH}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ArticleColumns1;
