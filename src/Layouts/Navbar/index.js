import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.scss";
import Button from "../../Components/atoms/Button";
import MediaQuery from "react-responsive";
const navbarLinks = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];
const NavbarSection = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="bg-body-tertiary navbar-cover"
    >
      <Container>
        <MediaQuery maxWidth={767}>
          <Navbar.Brand href="#home" className="brand-text">
            Landing
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {navbarLinks.map(({ text, link }) => (
                <Nav.Link href={link} className="">
                  {text}
                </Nav.Link>
              ))}
              <Button size={"md"} className={"button-dark"}>
                Buy Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {navbarLinks.map(({ text, link }) => (
                <Nav.Link href={link} className="">
                  {text}
                </Nav.Link>
              ))}
             
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className="brand-text">
            Landing
          </Navbar.Brand>
          <Button size={"md"} className={"button-dark"}>
                Buy Now
              </Button>
        </MediaQuery>
      </Container>
    </Navbar>
  );
};
export default NavbarSection;
