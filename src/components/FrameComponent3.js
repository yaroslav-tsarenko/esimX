import ParagraphBackgroundBorderSh1 from "./ParagraphBackgroundBorderSh1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`background-wrapper ${className}`}>
      <div className="background1">
        <div className="esim-heading">
          <h1 className="heading-211">How eSIMX's eSIM work</h1>
        </div>
        <div className="esim-steps">
          <div className="backgroundbordershadow12">
            <h1 className="step-1">Step 1</h1>
            <h2 className="check-your-phone-container">
              <p className="check-your-phone">Check your phone</p>
              <p className="is-compatible-with">is compatible with</p>
              <p className="esim">eSIM</p>
            </h2>
            <p className="before-you-purchase-container">
              <span className="before-you-purchase-make-sure">
                <span>Before you purchase, make sure</span>
              </span>
              <span className="that-your-smartphone-supports">
                <span>that your smartphone supports</span>
              </span>
              <span className="esim-you-can-find-a-list-of">
                <span>eSIM You can find a list of</span>
              </span>
              <span className="supported-smartphones-here">
                <b className="supported-smartphones-here1">
                  supported smartphones here
                </b>
              </span>
            </p>
          </div>
          <div className="backgroundbordershadow13">
            <h1 className="step-2">Step 2</h1>
            <h2 className="choose-your-package-container">
              <p className="choose-your">Choose your</p>
              <p className="package">package</p>
            </h2>
            <p className="order-esim-data-container">
              <span className="order-esim-data">
                Order eSIM data plan according
              </span>
              <span className="to-your-destination">
                to your destination country.
              </span>
              <span className="whencompleting-the-order">
                Whencompleting the order, you
              </span>
              <span className="will-receive-an">
                will receive an email with your
              </span>
              <span className="order-details">order details</span>
            </p>
          </div>
          <ParagraphBackgroundBorderSh1
            step3="Step 3"
            heading3GetESIMQRCode="Get eSIM QR Code"
            openTheFileAttachedToYour="Open the file attached to your"
            confirmationEmailWhereYou="confirmation email, where you"
            canFindTheEsimQRCodeAlong="can find the Esim QR code along"
            withYourESIMInstallationG="with your eSIM installation guide."
          />
          <ParagraphBackgroundBorderSh1
            step3="Step 4"
            heading3GetESIMQRCode="Scan QR Code"
            openTheFileAttachedToYour="Scan the QR code you have"
            confirmationEmailWhereYou="received using your eSIM"
            canFindTheEsimQRCodeAlong="compatible device and you are"
            withYourESIMInstallationG="good to go!"
          />
        </div>
      </div>
    </section>
  );
};


export default FrameComponent3;
