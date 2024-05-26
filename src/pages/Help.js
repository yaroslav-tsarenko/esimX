import Section from "../components/Section";
import Container from "../components/Container";
import ArticleColumns1 from "../components/ArticleColumns1";
import ArticleColumns from "../components/ArticleColumns";
import Background from "../components/Background";
import "./Help.css";

const Help = () => {
  return (
    <div className="help">
      <div className="section1">
        <div className="heading-2-get-10-of-discoun-container">
          <div className="heading-23">Get 10% of discount using the code</div>
        </div>
        <div className="border-container">
          <button className="border1">
            <a className="heading-24">ESIMX10</a>
          </button>
        </div>
        <button className="link1">
          <a className="buy-my-esim1">Buy my eSIM</a>
        </button>
      </div>
      <Section propColor="#3d3d3d" />
      <main className="container-parent">
        <Container />
        <section className="frame-wrapper">
          <div className="main-article-parent">
            <div className="main-article">
              <h3 className="heading-25">About eSIM and Eligible Devices</h3>
              <div className="article-columns">
                <div className="article-rows">
                  <div className="article-cells">
                    <div className="border2" />
                  </div>
                  <b className="strong-what">What is an eSIM?</b>
                </div>
              </div>
              <ArticleColumns1
                strongHowDoesESIMWork="How does eSIM work?"
                strongWhichHandsetModelsH=" Which handset models have eSIM capability?"
              />
              <div className="frame-parent">
                <div className="device-check-container-wrapper">
                  <div className="device-check-container">
                    <div className="device-check-columns">
                      <div className="device-check-rows">
                        <div className="border3" />
                      </div>
                      <b className="strong-how">
                        How to check if my device supports eSIM?
                      </b>
                    </div>
                    <div className="device-check-columns1">
                      <div className="border-frame">
                        <div className="border4" />
                      </div>
                      <b className="strong-how1">
                        How to install and activate an eSIM on various devices?
                      </b>
                    </div>
                  </div>
                </div>
                <h3 className="heading-26">
                  Purchasing and Setting Up the eSIM
                </h3>
              </div>
              <ArticleColumns1
                strongHowDoesESIMWork="What are the benefits of eSIM?"
                strongWhichHandsetModelsH="How to check if my device is eSIM compatible?"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <div className="main-article-inner">
                <div className="qr-scan-container-parent">
                  <div className="qr-scan-container">
                    <div className="qr-scan-columns">
                      <div className="qr-scan-rows">
                        <div className="border5" />
                      </div>
                      <b className="strong-how2">
                        How many times can I scan a single QR code?
                      </b>
                    </div>
                    <div className="qr-scan-columns1">
                      <div className="frame-div">
                        <div className="border6" />
                      </div>
                      <b className="how-to-install">
                        How to install an eSIM on Samsung Galaxy S20/S21 series
                      </b>
                    </div>
                  </div>
                  <b className="device">device?</b>
                </div>
              </div>
              <ArticleColumns
                strongWhatInformationDoes="What information does the QR code contain?"
                heading2StrongUsingTheESI="Using the eSIM"
              />
              <div className="main-article-child">
                <div className="dual-sim-container-parent">
                  <div className="dual-sim-container">
                    <div className="dual-sim-columns">
                      <div className="dual-sim-rows">
                        <div className="border7" />
                        <div className="border8" />
                        <div className="border9" />
                        <div className="border10" />
                      </div>
                    </div>
                    <div className="dual-sim-instructions">
                      <b className="strong-how3">How does dual SIM work?</b>
                      <b className="strong-how4">
                        How can I check how much data I’ve used?
                      </b>
                      <b className="strong-when">
                        When should I set up my eSIM?
                      </b>
                      <b className="what-happens-if">
                        What happens if I use up my data or exhaust the days of
                      </b>
                    </div>
                  </div>
                  <b className="validity">validity?</b>
                </div>
              </div>
              <div className="article-columns1">
                <div className="frame-group">
                  <div className="frame-container">
                    <div className="border-wrapper1">
                      <div className="border11" />
                    </div>
                    <p className="strong-is">
                      Is it possible to activate eSIM in roaming?
                    </p>
                  </div>
                  <div className="frame-parent1">
                    <div className="border-wrapper2">
                      <div className="border12" />
                    </div>
                    <b className="strong-can">
                      Can I use eSIM on two smartphones at the same time?
                    </b>
                  </div>
                </div>
              </div>
              <div className="article-columns2">
                <div className="frame-parent2">
                  <div className="border-wrapper3">
                    <div className="border13" />
                  </div>
                  <b className="strong-how5">
                    How many eSIM profiles can be stored at once?
                  </b>
                </div>
              </div>
              <ArticleColumns
                strongWhatInformationDoes="How easy is it to switch between multiple SIM profiles?"
                heading2StrongUsingTheESI={`Payment & Billing`}
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propDisplay="unset"
              />
              <div className="main-article-inner1">
                <div className="safe-payment-container-parent">
                  <div className="safe-payment-container">
                    <div className="safe-payment-columns">
                      <div className="border14" />
                      <div className="border15" />
                      <div className="border16" />
                    </div>
                  </div>
                  <div className="payment-instructions">
                    <b className="strong"> Is my payment safe?</b>
                    <b className="strong-what1">
                      What payment options are available?
                    </b>
                    <b className="strong-can1">Can I cancel my order?</b>
                  </div>
                </div>
              </div>
              <ArticleColumns
                strongWhatInformationDoes="What kind of credit cards do you accept?"
                heading2StrongUsingTheESI="Cancellations and Refunds"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propDisplay="inline-block"
              />
              <div className="frame-parent3">
                <div className="delete-container-wrapper">
                  <div className="delete-container">
                    <div className="delete-columns">
                      <div className="delete-rows">
                        <div className="delete-border-rows">
                          <div className="border17" />
                        </div>
                        <b className="strong-can2">
                          Can I delete/Cancel my eSIM profile?
                        </b>
                      </div>
                      <div className="delete-rows1">
                        <div className="border-wrapper4">
                          <div className="border18" />
                        </div>
                        <b className="what-happens-to">
                          What happens to the number when you delete eSIM in
                          your
                        </b>
                      </div>
                    </div>
                    <b className="smartphone">smartphone?</b>
                  </div>
                </div>
                <h3 className="heading-27">Troubleshooting</h3>
              </div>
              <div className="article-columns3">
                <div className="frame-parent4">
                  <div className="border-wrapper5">
                    <div className="border19" />
                  </div>
                  <b className="strong-how6">How do I troubleshoot my eSIM?</b>
                </div>
              </div>
              <div className="frame-parent5">
                <div className="connection-container-wrapper">
                  <div className="connection-container">
                    <div className="connection-columns">
                      <div className="connection-rows">
                        <div className="border20" />
                        <div className="border21" />
                        <div className="border22" />
                        <div className="border23" />
                      </div>
                    </div>
                    <div className="connection-instructions">
                      <b className="strong-what2">What if eSIM doesn’t work?</b>
                      <b className="strong-i">
                        I can’t connect to the internet with my eSIM
                      </b>
                      <b className="strong-code">
                        Code is No longer Avalable Error
                      </b>
                      <b className="strong-experiencing">
                        Experiencing slow speed
                      </b>
                    </div>
                  </div>
                </div>
                <h3 className="heading-28">Contact and Support</h3>
              </div>
              <div className="article-columns4">
                <div className="frame-parent6">
                  <div className="border-wrapper6">
                    <div className="border24" />
                  </div>
                  <b className="strong-how7">
                    How can I contact customer support?
                  </b>
                </div>
              </div>
              <ArticleColumns1
                strongHowDoesESIMWork="Still Have Questions? We’re Here To Help!"
                strongWhichHandsetModelsH="Contact our support team. We’re here to assist you!"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
            <div className="aside-parent">
              <div className="aside">
                <a className="label-search">Search</a>
                <div className="input-parent">
                  <div className="input" />
                  <button className="button-search">
                    <a className="search">Search</a>
                  </button>
                </div>
              </div>
              <div className="aside1">
                <div className="popular-aside">
                  <b className="heading-4">Popular Place</b>
                  <u className="link-europe">Europe</u>
                </div>
                <div className="location-links">
                  <u className="link-turkey">Turkey</u>
                </div>
                <div className="location-links1">
                  <u className="link-united">United Kingdom</u>
                </div>
                <div className="location-links2">
                  <u className="link-japan">Japan</u>
                </div>
                <u className="link-mexico">Mexico</u>
              </div>
              <div className="aside2" />
            </div>
          </div>
        </section>
      </main>
      <Background
        figureCroppedP1170572tf62="/figure--croppedp1170572tf-62f6bc70e18b1fdd4425d9b345a1ec54logo01300x79png1@2x.png"
        linkInstagramLink="/link--instagram-link1.svg"
        linkInstagramLink1="/link--instagram-link-11.svg"
        linkFacebookLink="/link--facebook-link1.svg"
      />
    </div>
  );
};

export default Help;
