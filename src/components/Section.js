import { useMemo } from "react";
import "./Section.css";

const Section = ({ className = "", propColor }) => {
  const itemLinkStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <header className={`section3 ${className}`}>
      <img
        className="link-cropped-p1170572tf-62f"
        loading="lazy"
        alt=""
        src="/link--croppedp1170572tf-62f6bc70e18b1fdd4425d9b345a1ec54logo012048x541png@2x.png"
      />
      <nav className="navigation-items-wrapper">
        <nav className="navigation-items">
          <a className="item-link">Shop</a>
          <a className="item-link1" style={itemLinkStyle}>
            Blog
          </a>
          <a className="item-link2">Help Center</a>
          <a className="item-link3">Login</a>
          <a className="item-link4">Sign up</a>
        </nav>
      </nav>
    </header>
  );
};


export default Section;
