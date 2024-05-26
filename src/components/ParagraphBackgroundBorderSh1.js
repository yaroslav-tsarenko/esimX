import "./ParagraphBackgroundBorderSh1.css";

const ParagraphBackgroundBorderSh1 = ({
  className = "",
  step3,
  heading3GetESIMQRCode,
  openTheFileAttachedToYour,
  confirmationEmailWhereYou,
  canFindTheEsimQRCodeAlong,
  withYourESIMInstallationG,
}) => {
  return (
    <div className={`paragraphbackgroundbordersh ${className}`}>
      <h1 className="step-3">{step3}</h1>
      <h2 className="heading-3">{heading3GetESIMQRCode}</h2>
      <p className="open-the-file-container">
        <span className="open-the-file">{openTheFileAttachedToYour}</span>
        <span className="confirmation-email-where">
          {confirmationEmailWhereYou}
        </span>
        <span className="can-find-the">{canFindTheEsimQRCodeAlong}</span>
        <span className="with-your-esim">{withYourESIMInstallationG}</span>
      </p>
    </div>
  );
};

export default ParagraphBackgroundBorderSh1;
