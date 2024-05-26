import FooterContainer from "./FooterContainer";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <FooterContainer
        listitemImgLogoLogo726dda="/listitem--img--logo--logo726dda4bpng@2x.png"
        linkEsimdbwebp="/link--esimdbwebp@2x.png"
        linkEsimsaiwebp="/link--esimsaiwebp@2x.png"
      />
    </footer>
  );
};


export default Footer;
