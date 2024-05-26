import Header from "../components/Header";
import FooterContainer from "../components/FooterContainer";
import "./OrderStatus.css";

const OrderStatus = () => {
  return (
    <div className="orderstatus">
      <Header
        linkHelpTextDecoration="unset"
        linkSignTextDecoration="unset"
        propDebugCommit="unset"
        propTextDecoration="unset"
        propDebugCommit1="unset"
      />
      <main className="order-tracking">
        <section className="order-tracking-header-parent">
          <div className="order-tracking-header">
            <div className="order-tracking-title">
              <h1 className="listitem-heading">Let's check your order</h1>
            </div>
            <div className="order-tracking-input">
              <div className="backgroundbordershadow">
                <div className="tablist">
                  <div className="order-id-input">
                    <div className="order-id-label">
                      <div className="by-order-id">By Order Id</div>
                    </div>
                    <div className="horizontal-divider" />
                  </div>
                  <div className="tab-by">By Email</div>
                  <div className="tab-by1">By Browser</div>
                </div>
                <div className="order-tracking-limitations">
                  <div className="login-prompt-parent">
                    <div className="login-prompt">
                      <div className="container">
                        <div className="border25" />
                        <div className="input1">
                          <div className="placeholder">2414543122100002</div>
                        </div>
                      </div>
                      <div className="button-background-wrapper">
                        <div className="button-background" />
                      </div>
                    </div>
                    <div className="limitations-details">
                      <div className="only-the-last">
                        Only the last 3 orders within the last 3 months can be
                        checked.
                      </div>
                      <div className="please-log-in">
                        Please log in for eSIM and more orders
                      </div>
                    </div>
                  </div>
                  <button className="button">
                    <div className="overlayshadow">
                      <div className="query">Query</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="query-result">
                <div className="listitem-query">Query Result</div>
              </div>
            </div>
          </div>
          <FooterContainer
            listitemImgLogoLogo726dda="/listitem--img--logo--logo726dda4bpng1@2x.png"
            linkEsimdbwebp="/link--esimdbwebp@2x.png"
            linkEsimsaiwebp="/link--esimsaiwebp1@2x.png"
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

export default OrderStatus;
