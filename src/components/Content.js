import { useCallback } from "react";
import BackgroundBorderShadow2 from "./BackgroundBorderShadow2";
import BackgroundBorderShadow1 from "./BackgroundBorderShadow1";
import BackgroundBorderShadow from "./BackgroundBorderShadow";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://esimx.com/esim-united-states - 15/05/2024, 1:59:24 EEST" to the project
  }, []);

  const onLinkClick = useCallback(() => {
    // Please sync "https://esimx.com/destinations - 15/05/2024, 1:59:51 EEST" to the project
  }, []);

  return (
    <section className={`content ${className}`}>
      <div className="travel-destinations">
        <div className="destinations-header">
          <div className="heading-2-where-are-you-trav-wrapper">
            <h1 className="heading-29">Where are you traveling next?</h1>
          </div>
          <div className="destination-cards">
            <BackgroundBorderShadow2
              container="/container@2x.png"
              japan="United States"
              prop="$5"
              propMinWidth="125.3px"
              backgroundBorderShadowFlexDirection="row"
              backgroundBorderShadowGap="20px"
              frameDivAlignSelf="unset"
              frameDivFlexDirection="column"
              frameDivWidth="181.3px"
              frameDivMinWidth="181.3px"
              frameDivAlignSelf1="stretch"
              frameDivFlex="1"
              onLinkContainerClick={onLinkContainerClick}
            />
            <BackgroundBorderShadow2
              container="/container-1@2x.png"
              japan="Japan"
              prop="$5"
            />
            <BackgroundBorderShadow1
              container="/container-2@2x.png"
              thailand="Thailand"
              prop="$6"
            />
            <BackgroundBorderShadow1
              container="/container-3@2x.png"
              thailand="United Kingdom"
              prop="$5"
              propGap="57.4px"
              propWidth="unset"
              propMinWidth="134px"
              propFlex="1"
              propDisplay="unset"
              propMinWidth1="unset"
            />
            <BackgroundBorderShadow2
              container="/container-4@2x.png"
              japan="Israel"
              prop="$7"
              propMinWidth="51.2px"
              backgroundBorderShadowFlexDirection="column"
              backgroundBorderShadowGap="13.4px"
              frameDivAlignSelf="stretch"
              frameDivFlexDirection="row"
              frameDivWidth="unset"
              frameDivMinWidth="unset"
              frameDivAlignSelf1="unset"
              frameDivFlex="unset"
            />
            <BackgroundBorderShadow2
              container="/container-5@2x.png"
              japan="South Korea"
              prop="$5"
              propMinWidth="114.3px"
              backgroundBorderShadowFlexDirection="column"
              backgroundBorderShadowGap="13.4px"
              frameDivAlignSelf="stretch"
              frameDivFlexDirection="row"
              frameDivWidth="unset"
              frameDivMinWidth="unset"
              frameDivAlignSelf1="unset"
              frameDivFlex="unset"
            />
            <div className="backgroundbordershadow4">
              <div className="container-wrapper1">
                <img
                  className="container-icon3"
                  alt=""
                  src="/container-6@2x.png"
                />
              </div>
              <div className="united-arab-emirates-parent">
                <div className="united-arab-emirates">United Arab Emirates</div>
                <div className="destination-card-from-price-parent">
                  <div className="destination-card-from-price">
                    <div className="from-12">
                      <span className="from3">{`From `}</span>
                      <span className="span3">$12</span>
                    </div>
                  </div>
                  <div className="usd3"> USD</div>
                </div>
                <div className="destination-card-u-a-e">
                  <div className="destination-card-u-a-e-view-of">
                    <div className="view-offers-container">
                      <u className="view-offers3">{`View Offers `}</u>
                    </div>
                    <u className="east3">east</u>
                  </div>
                </div>
              </div>
            </div>
            <BackgroundBorderShadow
              container="/container-7@2x.png"
              andorra="Andorra"
              prop="$9.5"
            />
            <BackgroundBorderShadow
              container="/globesvg.svg"
              andorra="Global"
              prop="$49"
              propWidth="168.7px"
              propMinWidth="168.7px"
              propMinWidth1="60.1px"
              propDebugCommit="unset"
              propDebugCommit1="unset"
              propMinWidth2="82px"
              propDebugCommit2="unset"
              propDebugCommit3="unset"
            />
          </div>
        </div>
        <div className="show-destinations">
          <button className="link3" onClick={onLinkClick}>
            <div className="overlayshadow2">
              <div className="show-all-destinations">Show All Destinations</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
