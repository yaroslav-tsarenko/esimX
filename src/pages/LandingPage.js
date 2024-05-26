import FrameComponent4 from "../components/FrameComponent4";
import Content from "../components/Content";
import PopularOffers from "../components/PopularOffers";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <FrameComponent4 />
      <Content />
      <PopularOffers />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default LandingPage;
