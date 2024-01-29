import Header from "../../Components/atoms/Header";
import heroBg from "../../assets/designer_1hero.png";
import Description from "../../Components/molecules/Description";
import { Container } from "react-bootstrap";
import "./Banner.scss";
import Button from "../../Components/atoms/Button";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="banner-cover"
    >
      <Container>
        <div className="banner-content-cover">
          <Header size={"lg"}>Introduce Your Product Quickly And Effectively</Header>
          <Description
          size={"lg"}
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
              "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
            ]}
          />
          <div className="d-lg-flex">
            <Button size={"lg"} className={"button-dark me-4 mb-3 mb-sm-0"}>Purchase UI Kit</Button>
            <Button size={"lg"}className={"button-light"}>Learn More</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
