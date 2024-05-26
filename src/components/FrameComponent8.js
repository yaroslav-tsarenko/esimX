import { useCallback } from "react";
import Article2 from "./Article2";
import Article1 from "./Article1";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://esimx.com/blog/travel-tips/best-esim-for-dubai/ - 15/05/2024, 2:01:08 EEST" to the project
  }, []);

  return (
    <section className={`dubai-article-wrapper ${className}`}>
      <div className="dubai-article">
        <Article2
          container="/container1@2x.png"
          heading3LinkBestESIMForDu="Best eSIM for Dubai"
          areYouPlanningATripToDuba="Are you planning a trip to Dubai in 2024 and looking for the best eSIM to stay"
          connectedIveGotYouCovered="connected? I’ve got you covered. In this guide, I’ll show you everything you"
          needToKnowAboutUsingAnESI="need to know about using an eSIM for Dubai. Including a full comparison of the"
          topDubaiESIMPlansFor="top Dubai eSIM plans for"
          onLinkContainerClick={onLinkContainerClick}
        />
        <Article1
          container="/container-16@2x.png"
          heading3LinkBestESIMForJa="Best eSIM for Jakarta"
          areYouPlanningATripToJaka="Are you planning a trip to Jakarta, Indonesia in 2024 and looking for the best"
          wayToStayConnectedAnESIMC="way to stay connected? An eSIM card is a convenient, hassle-free solution to"
          avoidExpensiveRoamingChar="avoid expensive roaming charges while ensuring you have reliable data access"
          onYourUnlockedESIMCompati="on your unlocked, eSIM-compatible phone. In this comprehensive guide, we’ll"
          compare="compare"
        />
      </div>
    </section>
  );
};


export default FrameComponent8;
