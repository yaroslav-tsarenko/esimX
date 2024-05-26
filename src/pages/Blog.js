import Section from "../components/Section";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Background from "../components/Background";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="section">
        <div className="heading-2-get-10-of-discoun-wrapper">
          <div className="heading-2">Get 10% of discount using the code</div>
        </div>
        <div className="border-wrapper">
          <button className="border">
            <a className="heading-21">ESIMX10</a>
          </button>
        </div>
        <button className="link">
          <a className="buy-my-esim">Buy my eSIM</a>
        </button>
      </div>
      <Section />
      <div className="heading-2-latest-articles-wrapper">
        <h1 className="heading-22">Latest articles</h1>
      </div>
      <FrameComponent8 />
      <FrameComponent6 />
      <FrameComponent5 />
      <Background
        figureCroppedP1170572tf62="/figure--croppedp1170572tf-62f6bc70e18b1fdd4425d9b345a1ec54logo01300x79png@2x.png"
        linkInstagramLink="/link--instagram-link.svg"
        linkInstagramLink1="/link--instagram-link-1.svg"
        linkFacebookLink="/link--facebook-link.svg"
      />
    </div>
  );
};

export default Blog;
