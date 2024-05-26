import { useMemo } from "react";
import "./Header.css";

const Header = ({
  className = "",
  linkHelpTextDecoration,
  linkSignTextDecoration,
  propDebugCommit,
  propTextDecoration,
  propDebugCommit1,
}) => {
  const linkBlogStyle = useMemo(() => {
    return {
      textDecoration: linkHelpTextDecoration,
    };
  }, [linkHelpTextDecoration]);

  const loginStyle = useMemo(() => {
    return {
      textDecoration: linkSignTextDecoration,
    };
  }, [linkSignTextDecoration]);

  const imgPublicStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const englishStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      debugCommit: propDebugCommit1,
    };
  }, [propTextDecoration, propDebugCommit1]);

  return (
    <header className={`header ${className}`}>
      <div className="get-10-off-with-code-esimx10-wrapper">
        <div className="get-10-off">
          Get 10% off with code ESIMX10, and sign up now for an extra 10% back!
        </div>
      </div>
      <div className="link-img-logo-logo726dd-parent">
        <img
          className="link-img-logo-logo726dd"
          loading="lazy"
          alt=""
          src="/link--img--logo--logo726dda4bpng@2x.png"
        />
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
        <div className="header-links">
          <a className="link-blog" style={linkBlogStyle}>
            Blog
          </a>
        </div>
        <div className="header-links1">
          <div className="link-help">Help Center</div>
        </div>
        <div className="header-links2">
          <div className="link-check">Check Order</div>
        </div>
        <div className="link-wrapper">
          <button className="link2">
            <div className="overlayshadow1">
              <a className="login" style={loginStyle}>
                Login
              </a>
            </div>
          </button>
        </div>
        <div className="header-links3">
          <div className="link-sign">Sign Up</div>
        </div>
        <div className="language-items-wrapper">
          <div className="language-items">
            <a className="img-public" style={imgPublicStyle}>
              public
            </a>
            <a className="english" style={englishStyle}>
              English
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
