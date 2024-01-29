import Intro from "./Layouts/Main/Intro";
import Pricing from "./Layouts/Main/Pricing";
import Footer from "./Layouts/Footer";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.scss";
import Content from "./Layouts/Main/Content";
import Banner from "./Layouts/Main/Banner";
import Navbar from "./Layouts/Navbar"
function App() {
  return (
    <>
    <Navbar />
      <Banner />
      <Container>
        <Intro />
        <Content />
      </Container>
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
