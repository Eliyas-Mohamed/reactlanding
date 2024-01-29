import { Row, Col } from "react-bootstrap";
import HeaderAndDescription from "../../Components/molecules/HeaderAndDescriptionCTA";
import "./Content.scss"
const contentSectionData = [
  {
    imgName: "intro_pic1.png",
    title: "Light, Fast & Powerful",
    descriptionText: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    ],
  },
  {
    imgName: "intro_pic2.png",
    title: "Light, Fast & Powerful",
    descriptionText: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    ],
  },
  {
    imgName: "intro_pic1.png",
    title: "Light, Fast & Powerful",
    descriptionText: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    ],
    buttontext:"Purchase Now"
  },
];
const Content = () => {
  return (
    <Row className="align-items-center" >
      {contentSectionData.map(({imgName,title,descriptionText,buttontext}) => (
        <>
          <Col sm={12} md={6} lg={7}  className="py-100 text-center">
            <img src={require(`../../assets/${imgName}`)} className="img-lg" alt="conten-img" />
          </Col>
          <Col sm={12} md={6} lg={5}  className="py-100">
            <HeaderAndDescription headerText={title} size={"md"} descriptionText={descriptionText} buttonText={buttontext}/>
          </Col>
        </>
      ))}
    </Row>
  );
};
export default Content;
