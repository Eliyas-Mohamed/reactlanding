import { Row, Col } from "react-bootstrap";
import HeaderAndDescription from "../../Components/molecules/HeaderAndDescriptionCTA";
import Card from "../../Components/molecules/Card";
import IntroPicture from "../../assets/intro-pic.png";
const cardApiData = [
  {
    imgName: "writingpad.png",
    title: "Title Goes Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  {
    imgName: "writingpad.png",
    title: "Title Goes Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
];

const Intro = () => {
  return (
    <Row className="py-50">
      <Col lg={6}>
        <HeaderAndDescription
          headerText={"Light, Fast & Powerful"}
          descriptionText={[
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
            "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
          ]}
        />
        <Row className="mt-80">
          {cardApiData.map(({ imgName, title, description }) => (
            <Col sm={"12"} md={"6"} className="text-center text-lg-start">
              <Card imgName={imgName} title={title} description={description} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col lg={6} className="text-center text-lg-start">
        <img src={IntroPicture} className="img-lg" alt="intro-pic" />
      </Col>
    </Row>
  );
};

export default Intro;
