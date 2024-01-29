import { Container } from "react-bootstrap";
import Button from "../../Components/atoms/Button";
import "./Footer.css";
const socialLinksData = [
  { imgName: "fb.png", link: "#" },
  { imgName: "linkedin.png", link: "#" },
  { imgName: "twitter.png", link: "#" },
  { imgName: "youtube.png", link: "#" },
  { imgName: "insta.png", link: "#" },
];
const Footer = () => {
  return (
    <div className="bg-e7ecff footer-cover">
      <Container>
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-5">
          <p className="text-939EA4 fs-14"> &copy; Your Company name </p>
          <h1 className="brand-text">Landing</h1>
          <div>
            <Button size={"sm"} className={"fs-12 button-dark button-sm"}>Purchase Now</Button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="d-flex flex-column align-items-center flex-sm-row justify-content-between">
            <ul className="d-flex flex-row p-0">
              <li>
                <a className="footer-link me-5 d-block" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link me-5 d-block" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link me-5 d-block" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="d-flex flex-row flex-md-row p-0">
              {socialLinksData.map(({imgName,link},index) => (
                <li className={`${index!==0?'ms-5':""}`}>
                  <a href={link} className="footer-link d-block"><img src={require(`../../assets/${imgName}`)} alt="footerlink"/></a>
                </li>
              ))}
            </ul>
         
        </div>
      </Container>
    </div>
  );
};
export default Footer;
