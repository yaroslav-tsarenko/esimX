import { useCallback } from "react";
import Article from "./Article";
import Article1 from "./Article1";
import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://esimx.com/blog/faqs/does-huawei-p30-have-esim/ - 15/05/2024, 2:03:10 EEST" to the project
  }, []);

  return (
    <section className={`huawei-article-wrapper ${className}`}>
      <div className="huawei-article">
        <div className="huawei-articles-parent">
          <div className="huawei-articles">
            <Article
              container="/container-61@2x.png"
              heading3LinkDoesHuaweiP20="Does Huawei P30 Have eSIM?"
              iveGotAHuaweiP20AndImCuri="I’m thinking about making the switch to an eSIM for convenience, but I’m not"
              anyHuaweiPhonesThatDoAndH="sure if my phone supports it. I have a Huawei P30. Does anyone know if it’s"
              eSIMOnThoseModels="eSIM compatible, or am I stuck with regular SIM cards?"
              propAlignSelf="unset"
              propDebugCommit="unset"
              propFlex="1"
              propMinWidth="361px"
              propAlignSelf1="unset"
              propFlex1="unset"
              propAlignSelf2="unset"
              propDisplay="unset"
              onLinkContainer2Click={onLinkContainerClick}
            />
            <Article1
              container="/container-71@2x.png"
              heading3LinkBestESIMForJa="Does Huawei Mate 40 Support eSIM?"
              areYouPlanningATripToJaka="The Huawei Mate 40 is a powerful smartphone packed with advanced features."
              wayToStayConnectedAnESIMC="One question many have is whether the Huawei Mate 40"
              avoidExpensiveRoamingChar="supports eSIM technology. The answer is yes – but with a few important details"
              onYourUnlockedESIMCompati="to keep in mind. eSIM Support Varies by Mate 40 Model The Huawei Mate 40"
              compare="comes in both"
              propDisplay="inline-block"
              propDebugCommit="unset"
              propDebugCommit1="unset"
            />
          </div>
          <div className="article5">
            <div className="link-wrapper4">
              <div className="link17">
                <img
                  className="container-icon14"
                  alt=""
                  src="/container-81@2x.png"
                />
                <div className="gradient5" />
              </div>
            </div>
            <div className="huawei-p-heading-wrapper">
              <div className="huawei-p-heading">
                <h2 className="heading-310">Does Huawei P40 Support eSIM?</h2>
                <p className="the-huawei-p40-container">
                  <span className="the-huawei-p40">
                    The Huawei P40 and P40 Pro are the first Huawei phones to
                    support eSIM,
                  </span>
                  <span className="offering-users-a">
                    offering users a convenient way to connect without a
                    physical SIM card.
                  </span>
                </p>
              </div>
            </div>
            <FrameComponent7 />
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <h2 className="leftsvg">{`<<`}</h2>
            <div className="social-links">1</div>
            <div className="link-2">2</div>
            <div className="link-3">3</div>
            <div className="link-4">4</div>
            <div className="link-5">5</div>
            <h2 className="link18">{`>>`}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent5;
