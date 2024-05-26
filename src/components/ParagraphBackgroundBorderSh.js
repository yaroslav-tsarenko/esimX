import "./ParagraphBackgroundBorderSh.css";

const ParagraphBackgroundBorderSh = ({
  className = "",
  tapAndPlay,
  heading3Convenient,
  enjoyTheConvenienceOfBuyi,
  anLocalESIMForYourTrip,
  anytimeAnywhereWithESIMX,
}) => {
  return (
    <div className={`paragraphbackgroundbordersh1 ${className}`}>
      <h3 className="tap-and-play">{tapAndPlay}</h3>
      <h2 className="heading-34">{heading3Convenient}</h2>
      <p className="enjoy-the-convenience-container">
        <span className="enjoy-the-convenience">
          {enjoyTheConvenienceOfBuyi}
        </span>
        <span className="an-local-esim">{anLocalESIMForYourTrip}</span>
        <span className="anytime-anywhere-with">
          {anytimeAnywhereWithESIMX}
        </span>
      </p>
    </div>
  );
};


export default ParagraphBackgroundBorderSh;
