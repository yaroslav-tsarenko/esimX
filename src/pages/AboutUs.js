import Header from "../components/Header";
import FooterContainer from "../components/FooterContainer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <Header
        linkHelpTextDecoration="unset"
        linkSignTextDecoration="none"
        propDebugCommit="unset"
        propTextDecoration="none"
        propDebugCommit1="unset"
      />
      <main className="about-content-wrapper">
        <section className="about-content">
          <div className="section-parent">
            <div className="section2">
              <h1 className="heading-1">About Us</h1>
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
            <div className="about-description">
              <p className="at-esimx-we-container">
                <span className="at-esimx-we">
                  At eSIMX, we believe in seamless, borderless connectivity.
                  Born out of a desire to redefine communication for today’s
                  global citizens, we strive to simplify your mobile
                  connectivity
                </span>
                <span className="needs-through-a">
                  needs through a unique blend of technology and convenience.
                </span>
              </p>
              <p className="we-are-not-container">
                <span className="we-are-not">
                  We are not just a global eSIM provider; we’re your reliable
                  partner in eliminating expensive roaming charges and
                  delivering affordable worldwide access to over 200 digital SIM
                  cards.
                </span>
                <span className="whether-youre-travelling">
                  Whether you’re travelling for business or pleasure, we ensure
                  that staying connected is no longer a luxury, but a standard
                  that everyone can enjoy.
                </span>
              </p>
              <p className="with-our-services-container">
                <span className="with-our-services">
                  With our services, you can effortlessly switch between
                  different mobile carriers, bypassing the traditional hassles
                  of physical SIM cards. This means no more hunting for local
                  SIM
                </span>
                <span className="card-stores-or">
                  card stores or dealing with complicated roaming packages while
                  you’re abroad.
                </span>
              </p>
              <p className="at-the-heart-container">
                <span className="at-the-heart">
                  At the heart of our business is our commitment to our
                  customers. Our dedicated team works tirelessly to provide you
                  with superior customer service and uncompromised network
                </span>
                <span className="quality-anywhere-anytime">
                  quality, anywhere, anytime.
                </span>
              </p>
              <p className="join-us-in">
                Join us in our journey as we revolutionize the world of global
                mobile connectivity, one eSIM at a time. With eSIMX, you’re not
                just staying connected; you’re staying ahead.
              </p>
            </div>
          </div>
          <FooterContainer
            listitemImgLogoLogo726dda="/listitem--img--logo--logo726dda4bpng2@2x.png"
            linkEsimdbwebp="/link--esimdbwebp@2x.png"
            linkEsimsaiwebp="/link--esimsaiwebp2@2x.png"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propDebugCommit2="unset"
            propDebugCommit3="unset"
            propDebugCommit4="unset"
            propDebugCommit5="unset"
          />
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
