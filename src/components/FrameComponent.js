import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`customer-container-wrapper ${className}`}>
      <div className="customer-container">
        <div className="customer-heading">
          <h1 className="heading-214">Hundreds of happy eSIM customers</h1>
        </div>
        <div className="customer-review">
          <div className="backgroundbordershadow15">
            <div className="review-image-container">
              <img
                className="avatar1jpeg-icon"
                loading="lazy"
                alt=""
                src="/avatar1jpeg@2x.png"
              />
              <div className="review-details">
                <div className="reviewer-names">
                  <div className="edward-choi">Edward Choi</div>
                  <div className="radio-grade-1-grade-parent">
                    <div className="radio-grade">grade</div>
                    <div className="radio-grade1">grade</div>
                    <div className="radio-grade2">grade</div>
                    <div className="radio-grade3">grade</div>
                    <div className="radio-grade4">grade</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="i-was-waiting-container">
              <span className="i-was-waiting">
                I was waiting for eSim for long
              </span>
              <span className="time-and-now">
                time. And now you can buy it even
              </span>
              <span className="at-sea-like">
                at sea, like me! That’s great! All
              </span>
              <span className="was-without-any">was without any problems,</span>
              <span className="internet-is-as">
                internet is as usual working OK.
              </span>
            </p>
          </div>
          <div className="backgroundbordershadow16">
            <div className="avatar2jpg-parent">
              <img
                className="avatar2jpg-icon"
                loading="lazy"
                alt=""
                src="/avatar2jpg@2x.png"
              />
              <div className="frame-wrapper1">
                <div className="eugene-pasechnikov-parent">
                  <div className="eugene-pasechnikov">Eugene Pasechnikov</div>
                  <div className="radio-grade-1-grade-group">
                    <div className="radio-grade5">grade</div>
                    <div className="radio-grade6">grade</div>
                    <div className="radio-grade7">grade</div>
                    <div className="radio-grade8">grade</div>
                    <div className="radio-grade9">grade</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="the-delivery-is-container">
              <span className="the-delivery-is">
                The delivery is instant, and the
              </span>
              <span className="setup-is-easy">
                setup is easy to follow. Overall, it
              </span>
              <span className="is-a-very">
                is a very good experience to me.
              </span>
            </p>
          </div>
          <div className="backgroundbordershadow17">
            <div className="avatar3jpeg-parent">
              <img
                className="avatar3jpeg-icon"
                loading="lazy"
                alt=""
                src="/avatar3jpeg@2x.png"
              />
              <div className="frame-wrapper2">
                <div className="viktoriya-belfer-parent">
                  <div className="viktoriya-belfer">Viktoriya Belfer</div>
                  <div className="radio-grade-1-grade-container">
                    <div className="radio-grade10">grade</div>
                    <div className="radio-grade11">grade</div>
                    <div className="radio-grade12">grade</div>
                    <div className="radio-grade13">grade</div>
                    <div className="radio-grade14">grade</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="super-easy-to-container">
              <span className="super-easy-to">
                Super easy to buy and set it up.
              </span>
              <span className="just-scanned-the">
                Just scanned the QR code for the
              </span>
              <span className="esim-and-my">eSIM and my phone was</span>
              <span className="connected-to-the">
                connected to the network. Great
              </span>
              <span className="option-for-travelers">
                option for travelers to get
              </span>
              <span className="connectivity-at-a">
                connectivity at a reasonable
              </span>
              <span className="price">price.</span>
            </p>
          </div>
          <div className="backgroundbordershadow18">
            <div className="avatar4jpg-parent">
              <img
                className="avatar4jpg-icon"
                loading="lazy"
                alt=""
                src="/avatar4jpg@2x.png"
              />
              <div className="frame-wrapper3">
                <div className="emanuela-salermo-parent">
                  <div className="emanuela-salermo">Emanuela Salermo</div>
                  <div className="radio-grade-1-grade-parent1">
                    <div className="radio-grade15">grade</div>
                    <div className="radio-grade16">grade</div>
                    <div className="radio-grade17">grade</div>
                    <div className="radio-grade18">grade</div>
                    <div className="radio-grade19">grade</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="i-have-used-container">
              <span className="i-have-used">
                I have used your Sim for my trip to
              </span>
              <span className="the-usa-i">the USA! I recommend it 100%.</span>
              <span className="thank-you-very">
                Thank you very much for your
              </span>
              <span className="service">service.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default FrameComponent;
