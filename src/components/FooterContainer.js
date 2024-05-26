import { useMemo } from "react";
import "./FooterContainer.css";

const FooterContainer = ({
  className = "",
  listitemImgLogoLogo726dda,
  linkEsimdbwebp,
  linkEsimsaiwebp,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
  propDebugCommit4,
  propDebugCommit5,
}) => {
  const listitemCountriesStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const popularCountriesStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const copyrightStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const linkEsimdbwebpStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const linkEsimsiosvgStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit4,
    };
  }, [propDebugCommit4]);

  const linkEsimsaiwebpStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit5,
    };
  }, [propDebugCommit5]);

  return (
    <div className={`footer-container ${className}`}>
      <div className="footer-columns">
        <div className="company-info-column">
          <div className="company-details">
            <div className="company-contact">
              <img
                className="listitem-img-logo-logo7"
                loading="lazy"
                alt=""
                src={listitemImgLogoLogo726dda}
              />
              <p className="esimx-is-a-container">
                <span className="esimx-is-a">
                  eSIMX is a digital channel for telecom services, enabling
                  consumers to find and buy the best
                </span>
                <span className="mobile-offers-through">
                  mobile offers through their favorite e-commerce platforms
                </span>
              </p>
              <p className="skylark-connect-llc-container">
                <span className="skylark-connect-llc">Skylark Connect LLC</span>
                <span className="pacific-coast-hwy">
                  222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
                </span>
              </p>
            </div>
            <div className="quick-links-column">
              <b className="listitem-quick">Quick Links</b>
              <div className="listitem-shop">Shop</div>
              <div className="info-links">
                <div className="listitem-blog">Blog</div>
                <a className="listitem-about">About</a>
                <div className="listitem-contact">Contact</div>
                <div className="listitem-destinations">Destinations</div>
              </div>
            </div>
          </div>
          <div className="regions-column">
            <div className="region-links">
              <b className="listitem-regions">Regions</b>
              <div className="listitem-esim">eSIM for Europe</div>
              <div className="continent-regions">
                <div className="listitem-esim1">eSIM for Asia</div>
                <div className="listitem-esim2">eSIM for North America</div>
                <div className="listitem-esim3">eSIM for South America</div>
                <div className="listitem-esim4">eSIM for Oceania</div>
                <div className="listitem-esim5">eSIM for Africa</div>
                <div className="listitem-esim6">eSIM for Middle East</div>
              </div>
            </div>
            <div className="countries-column">
              <b className="listitem-countries" style={listitemCountriesStyle}>
                Countries
              </b>
              <div className="popular-countries" style={popularCountriesStyle}>
                <div className="listitem-esim7">eSIM for USA</div>
                <div className="listitem-esim8">eSIM for Japan</div>
                <div className="listitem-esim9">eSIM for Canada</div>
                <div className="listitem-esim10">eSIM for Singapore</div>
                <div className="esim-for-united-container">
                  <p className="esim-for-united">eSIM for United</p>
                  <p className="kingdom">Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-social">
        <div className="copyright-social-container">
          <div className="copyright" style={copyrightStyle}>
            <div className="platform-logos">
              <img
                className="link-esimdbwebp"
                alt=""
                src={linkEsimdbwebp}
                style={linkEsimdbwebpStyle}
              />
              <img
                className="link-esimsiosvg"
                alt=""
                src="/link--esimsiosvg.svg"
                style={linkEsimsiosvgStyle}
              />
            </div>
            <div className="esimx-parent">
              <div className="esimx">{`© 2024 eSIMX `}</div>
              <input
                className="link-privacy"
                placeholder={`Privacy Policy | Terms & Conditions | Refunds Policy`}
                type="text"
              />
            </div>
          </div>
          <img
            className="link-esimsaiwebp"
            loading="lazy"
            alt=""
            src={linkEsimsaiwebp}
            style={linkEsimsaiwebpStyle}
          />
        </div>
        <div className="social-media">
          <img
            className="link-img-insvg"
            loading="lazy"
            alt=""
            src="/link--img--insvg.svg"
          />
          <img
            className="link-img-inssvg"
            loading="lazy"
            alt=""
            src="/link--img--inssvg.svg"
          />
          <img className="link-img-fbsvg" alt="" src="/link--img--fbsvg.svg" />
        </div>
      </div>
    </div>
  );
};


export default FooterContainer;
