import { useCallback } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://esimx.com/blog/travel-tips/best-esim-for-dubai/ - 15/05/2024, 2:01:08 EEST" to the project
  }, []);

  return (
    <section className={`article-container-wrapper ${className}`}>
      <div className="article-container">
        <div className="article-heading">
          <h1 className="heading-212">Latest articles</h1>
        </div>
        <div className="article-list">
          <div className="link-parent">
            <div className="link6" onClick={onLinkContainerClick}>
              <img
                className="img-best-esim-for-dubai-be"
                loading="lazy"
                alt=""
                src="/img--best-esim-for-dubai--bestesimfordubaiwebp@2x.png"
              />
              <h3 className="heading-31">Best eSIM for Dubai</h3>
              <p className="are-you-planning-container">
                <span className="are-you-planning-container1">
                  <span className="are-you-planning">
                    Are you planning a trip to Dubai in 2024 and looking for
                  </span>
                  <span className="the-best-esim">
                    the best eSIM to stay connected? I’ve got you covered.
                  </span>
                  <span className="in-this-guide">In this guide, …</span>
                </span>
              </p>
            </div>
            <div className="link7">
              <img
                className="img-best-esim-for-stockholm"
                loading="lazy"
                alt=""
                src="/img--best-esim-for-stockholm--bestesimforstockholmjpg@2x.png"
              />
              <h3 className="best-esim-for-container">
                <p className="best-esim-for">Best eSIM for Stockholm: Stay</p>
                <p className="connected-in-swedens">
                  Connected in Sweden’s Scenic
                </p>
                <p className="capital">Capital</p>
              </h3>
              <p className="as-an-avid-container">
                <span className="as-an-avid-container1">
                  <span className="as-an-avid">
                    As an avid traveler, having reliable data connectivity is
                  </span>
                  <span className="essential-whenever-i">
                    essential whenever I visit a new destination. Whether
                  </span>
                  <span className="its-looking-up">
                    it’s looking up directions on Google Maps, posting …
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="link-group">
            <div className="link8">
              <img
                className="img-best-esim-for-jakarta"
                loading="lazy"
                alt=""
                src="/img--best-esim-for-jakarta--bestesimforjakartawebp@2x.png"
              />
              <h3 className="heading-32">Best eSIM for Jakarta</h3>
              <p className="are-you-planning-container2">
                <span className="are-you-planning-container3">
                  <span className="are-you-planning1">
                    Are you planning a trip to Jakarta, Indonesia in 2024
                  </span>
                  <span className="and-looking-for">
                    and looking for the best way to stay connected? An
                  </span>
                  <span className="esim-card-is">
                    eSIM card is a convenient, …
                  </span>
                </span>
              </p>
            </div>
            <div className="link9">
              <img
                className="img-best-esim-for-toronto"
                loading="lazy"
                alt=""
                src="/img--best-esim-for-toronto--bestesimfortorontowebp@2x.png"
              />
              <h3 className="best-esim-for-container1">
                <p className="best-esim-for1">Best eSIM for Toronto: Stay</p>
                <p className="connected-in-canadas">
                  Connected in Canada’s Largest City
                </p>
              </h3>
              <p className="are-you-planning-container4">
                <span className="are-you-planning-container5">
                  <span className="are-you-planning2">
                    Are you planning a trip to the bustling metropolis of
                  </span>
                  <span className="toronto-as-canadas">
                    Toronto? As Canada’s largest city, Toronto offers a
                  </span>
                  <span className="vibrant-mix-of">
                    vibrant mix of culture, entertainment, and business …
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="link-parent1">
            <div className="link10">
              <img
                className="img-best-esim-for-bangkok-tr"
                loading="lazy"
                alt=""
                src="/img--best-esim-for-bangkok-travel-in-2024--bestesimforbangkoktravelin2024webp@2x.png"
              />
              <h3 className="best-esim-for-container2">
                <p className="best-esim-for2">
                  Best eSIM for Bangkok Travel in
                </p>
                <p className="p">2024</p>
              </h3>
              <p className="i-recently-took-container">
                <span className="i-recently-took-container1">
                  <span className="i-recently-took">
                    I recently took a trip to Bangkok, Thailand and wanted
                  </span>
                  <span className="to-stay-connected">
                    to stay connected while visiting this vibrant city. As a
                  </span>
                  <span className="digital-nomad-who">
                    digital nomad who travels full-time …
                  </span>
                </span>
              </p>
            </div>
            <div className="link11">
              <img
                className="img-does-huawei-p20-support"
                loading="lazy"
                alt=""
                src="/img--does-huawei-p20-support-esim--doeshuaweip20supportesimwebp@2x.png"
              />
              <h3 className="heading-33">Does Huawei P20 Support eSIM?</h3>
              <p className="ive-got-a-container">
                <span className="ive-got-a">
                  I’ve got a Huawei P20 and I’m curious if it supports
                </span>
                <span className="esim-if-it">
                  eSIM. If it doesn’t, are there any Huawei phones that
                </span>
                <span className="do-and-how">
                  do? And how do I switch from a regular SIM to an eSIM
                </span>
                <span className="on-those-models">on those models?</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default FrameComponent2;
