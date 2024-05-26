import "./Background.css";

const Background = ({
  className = "",
  figureCroppedP1170572tf62,
  linkInstagramLink,
  linkInstagramLink1,
  linkFacebookLink,
}) => {
  return (
    <footer className={`background2 ${className}`}>
      <div className="footer1">
        <div className="footer-content">
          <img
            className="figure-cropped-p1170572tf-6"
            loading="lazy"
            alt=""
            src={figureCroppedP1170572tf62}
          />
          <div className="footer-info">
            <p className="esim-x-is-container">
              <span className="esim-x-is">
                eSIM X is a digital channel for telecom services, enabling
              </span>
              <span className="consumers-to-find">
                consumers to find and buy the best mobile offers through
              </span>
              <span className="their-favorite-e-commerce">
                their favorite e-commerce platforms
              </span>
            </p>
            <p className="skylark-connect-llc-container1">
              <span className="skylark-connect-llc1">Skylark Connect LLC</span>
              <span className="pacific-coast-hwy1">
                222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
              </span>
            </p>
          </div>
        </div>
        <div className="footer-navigation">
          <div className="footer-quick-links">
            <div className="quick-links">Quick Links</div>
            <u className="link-shop">Shop</u>
            <u className="link-blog1">Blog</u>
            <a className="link-about">About</a>
            <u className="link-contact">Contact</u>
            <u className="link-destinations">Destinations</u>
            <div className="social-icon-parent">
              <div className="social-icon">
                <img
                  className="svg-icon"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className="list">+1 000 000 0000</div>
            </div>
          </div>
          <div className="footer-regions">
            <div className="regions">Regions</div>
            <u className="link-esim">eSIM for Europe</u>
            <u className="link-esim1">eSIM for Asia</u>
            <u className="link-esim2">eSIM for North America</u>
            <u className="link-esim3">eSIM for South America</u>
            <u className="link-esim4">eSIM for Oceania</u>
            <u className="link-esim5">eSIM for Africa</u>
            <u className="link-esim6">eSIM for Middle East</u>
          </div>
          <div className="footer-countries">
            <div className="countries">Countries</div>
            <u className="link-esim7">eSIM for USA</u>
            <u className="link-esim8">eSIM for Japan</u>
            <u className="link-esim9">eSIM for Canada</u>
            <u className="link-esim10">eSIM for Singapore</u>
            <u className="link-esim11">eSIM for United Kingdom</u>
          </div>
        </div>
      </div>
      <div className="copyright1">
        <p className="esim-x-privacy-policy-terms-container">
          <span className="esim-x-privacy-policy-terms-container1">
            <span>© 2023 eSIM X </span>
            <span className="privacy-policy">Privacy Policy</span>
            <span> | </span>
            <span className="terms-conditions">{`Terms & Conditions`}</span>
            <span> | </span>
            <span className="refunds-policy">Refunds Policy</span>
          </span>
        </p>
        <div className="social-media-links">
          <img
            className="link-instagram-link"
            loading="lazy"
            alt=""
            src={linkInstagramLink}
          />
          <img
            className="link-instagram-link1"
            alt=""
            src={linkInstagramLink1}
          />
          <img
            className="link-facebook-link"
            loading="lazy"
            alt=""
            src={linkFacebookLink}
          />
        </div>
      </div>
    </footer>
  );
};



export default Background;
