import { useMemo } from "react";
import "./ArticleColumns.css";

const ArticleColumns = ({
  className = "",
  strongWhatInformationDoes,
  heading2StrongUsingTheESI,
  propDebugCommit,
  propDebugCommit1,
  propDisplay,
}) => {
  const border1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const strongWhatStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const heading2Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`article-columns6 ${className}`}>
      <div className="article-columns-inner">
        <div className="frame-parent20">
          <div className="border-wrapper8">
            <div className="border29" style={border1Style} />
          </div>
          <b className="strong-what3" style={strongWhatStyle}>
            {strongWhatInformationDoes}
          </b>
        </div>
      </div>
      <h3 className="heading-215" style={heading2Style}>
        {heading2StrongUsingTheESI}
      </h3>
    </div>
  );
};



export default ArticleColumns;
