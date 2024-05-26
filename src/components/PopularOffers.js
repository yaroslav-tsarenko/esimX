import { useCallback } from "react";
import PopularOfferCardBuyButtons from "./PopularOfferCardBuyButtons";
import PopularOfferCardBackgrounds from "./PopularOfferCardBackgrounds";
import PropTypes from "prop-types";
import "./PopularOffers.css";

const PopularOffers = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://esimx.com/esim-united-states - 15/05/2024, 1:59:24 EEST" to the project
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    // Please sync "https://esimx.com/esim-europe - 15/05/2024, 2:01:58 EEST" to the project
  }, []);

  return (
    <section className={`popular-offers ${className}`}>
      <div className="popular-offers-header">
        <div className="heading-2-popular-esim-offer-wrapper">
          <h1 className="heading-210">Popular eSIM offers</h1>
        </div>
        <div className="popular-offer-cards">
          <div className="popular-offer-card-items">
            <div className="popular-offer-card-backgrounds1">
              <div className="backgroundbordershadow7">
                <div className="popular-offer-card-elements">
                  <div className="popular-offer-card-icons">
                    <img
                      className="five-gsvg-icon"
                      alt=""
                      src="/five-gsvg.svg"
                    />
                    <h3 className="phone-in-talk">phone_in_talk</h3>
                  </div>
                  <PopularOfferCardBuyButtons
                    container="/container-8@2x.png"
                    thailand50GB10DaysWith="Thailand 50GB 10Days With"
                    calls="Calls"
                    sVG="$8"
                  />
                </div>
                <div className="popular-offer-card-actions">
                  <div className="popular-offer-card-action-item">
                    <div className="popular-offer-card-buy-now-but">
                      <a className="buy-now2">{`Buy Now `}</a>
                    </div>
                    <u className="east6">east</u>
                  </div>
                </div>
              </div>
              <div className="backgroundbordershadow8">
                <div className="popular-offer-card-content-ele">
                  <h3 className="restore">restore</h3>
                  <div className="popular-offer-card-south-korea">
                    <div className="popular-offer-card-south-korea1">
                      <div className="popular-offer-card-south-korea2">
                        <img
                          className="container-icon7"
                          alt=""
                          src="/container-9@2x.png"
                        />
                      </div>
                      <div className="korea-daily-data">
                        <div className="south-korea-daily">
                          South Korea Daily 2GB 5Days
                        </div>
                        <div className="korea-from-price">
                          <b className="korea-price-separator">$9.5</b>
                          <div className="korea-price">
                            <div className="usd7"> USD</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popular-offer-three">
                  <div className="usa-indonesia-offer">
                    <div className="usa-buy-now">
                      <a className="buy-now3">{`Buy Now `}</a>
                    </div>
                    <u className="east7">east</u>
                  </div>
                </div>
              </div>
            </div>
            <PopularOfferCardBackgrounds
              container="/container-10@2x.png"
              japan20GB30Days="Japan 20GB 30Days"
              container1="$24.8"
              container2="/container-11@2x.png"
              unitedStates20GB30Days="United States 20GB 30Days"
              container3="$29"
              onLinkContainer2Click={onLinkContainerClick}
            />
            <PopularOfferCardBackgrounds
              container="/container-12@2x.png"
              japan20GB30Days="United Kingdom 10GB 7Days"
              container1="$9"
              container2="/container-13@2x.png"
              unitedStates20GB30Days="Indonesia 10GB 30Days"
              container3="$15"
              propMinWidth="20.3px"
            />
          </div>
          <div className="popular-offer-four">
            <div className="backgroundbordershadow9">
              <PopularOfferCardBuyButtons
                container="/container-14@2x.png"
                thailand50GB10DaysWith="United Arab Emirates 10GB"
                calls="30Days"
                sVG="$40"
                propMarginTop="unset"
                propPadding="0px 18px"
                propMinWidth="30.5px"
              />
              <div className="u-a-europe-btn">
                <div className="u-a-europe-buttons">
                  <a className="buy-now4">{`Buy Now `}</a>
                </div>
                <u className="east8">east</u>
              </div>
            </div>
            <div className="backgroundbordershadow10">
              <img
                className="salesvg-icon"
                loading="lazy"
                alt=""
                src="/salesvg.svg"
              />
              <div className="frame-parent14">
                <div className="frame-parent15">
                  <div className="container-wrapper4">
                    <img
                      className="container-icon8"
                      alt=""
                      src="/container-15@2x.png"
                    />
                  </div>
                  <div className="andorra-details">
                    <div className="andorra-10gb-30days">
                      Andorra 10GB 30Days
                    </div>
                    <div className="andorra-price">
                      <b className="andorra-separator">$16.5</b>
                      <div className="andorra-value">
                        <div className="andorra-u-s-d">
                          <div className="usd8"> USD</div>
                          <s className="usd9"> $21 USD</s>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="europe-button-parent">
                  <div className="europe-button">
                    <a className="buy-now5">{`Buy Now `}</a>
                  </div>
                  <u className="east9">east</u>
                </div>
              </div>
            </div>
            <div className="backgroundbordershadow11">
              <div className="phone-in-talk-parent">
                <h3 className="phone-in-talk1">phone_in_talk</h3>
                <PopularOfferCardBuyButtons
                  container="/europesvg.svg"
                  thailand50GB10DaysWith="Europe 12GB 14Days With"
                  calls="Calls"
                  sVG="$31"
                  propMarginTop="-0.6px"
                  propPadding="unset"
                  propMinWidth="30.5px"
                />
              </div>
              <div className="link-container">
                <div className="link5" onClick={onLinkContainer2Click}>
                  <div className="buy-now-container">
                    <a className="buy-now6">{`Buy Now `}</a>
                  </div>
                  <u className="east10">east</u>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PopularOffers;
