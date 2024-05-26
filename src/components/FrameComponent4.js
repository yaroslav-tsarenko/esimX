import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`header-parent ${className}`}>
      <Header />
      <div className="background">
        <h1 className="world-at-your">
          World at Your Fingertips: Travel, Connect, Explore
        </h1>
        <div className="label-wrapper">
          <div className="label">
            <div className="border26" />
            <h3 className="search1">search</h3>
            <div className="search-input">
              <div className="container1">
                <div className="search-for-a">
                  Search for a country or region
                </div>
              </div>
            </div>
            <h3 className="arrow-drop-down">arrow_drop_down</h3>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent4;
