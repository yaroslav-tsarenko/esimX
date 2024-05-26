import ParagraphBackgroundBorderSh from "./ParagraphBackgroundBorderSh";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`choose-container-wrapper ${className}`}>
      <div className="choose-container">
        <div className="choose-heading">
          <h1 className="heading-213">Why choose eSIMX</h1>
        </div>
        <div className="choose-benefits">
          <ParagraphBackgroundBorderSh
            tapAndPlay="tap_and_play"
            heading3Convenient="Convenient"
            enjoyTheConvenienceOfBuyi="Enjoy the convenience of buying"
            anLocalESIMForYourTrip="an local eSIM for your trip"
            anytimeAnywhereWithESIMX="anytime, anywhere with eSIMX."
          />
          <ParagraphBackgroundBorderSh
            tapAndPlay="gpp_good"
            heading3Convenient="High Quality"
            enjoyTheConvenienceOfBuyi="Get fast and reliable internet"
            anLocalESIMForYourTrip="connection with eSIM from the"
            anytimeAnywhereWithESIMX="top local internet providers!."
          />
          <div className="backgroundbordershadow14">
            <img
              className="linksvg-icon"
              loading="lazy"
              alt=""
              src="/linksvg.svg"
            />
            <h2 className="heading-35">Connect Easily</h2>
            <p className="stay-connected-with-container">
              <span className="stay-connected-with">
                Stay connected with friends and
              </span>
              <span className="family-we-offer">
                family. We offer various options
              </span>
              <span className="from-data-only">
                from data only to phone number
              </span>
              <span className="supported-sim">supported SIM!.</span>
            </p>
          </div>
          <div className="paragraphbackgroundbordersh2">
            <h3 className="support-agent">support_agent</h3>
            <div className="heading-36">24/7 Support</div>
            <p className="weve-got-your-container">
              <span className="weve-got-your">
                We've got your back! We're here
              </span>
              <span className="for-you-anywhere">
                for you anywhere, anytime to
              </span>
              <span className="support-any-problems">
                support any problems that you
              </span>
              <span className="encounter">encounter.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent1;
