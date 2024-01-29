import cardImage from "../../assets/writingpad.png";
import "./Card.scss";
import Header from "../atoms/Header";
import Description from "./Description";
const Card = ({ imgName, title, description }) => {
  return (
    <div className="card-cover">
      <img src={cardImage} className="mb-3 card-image" alt="card-img" />
      <Header size={"sm"}>{title}</Header>
      <Description
        size={"sm"}
        descriptions={[
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        ]}
      ></Description>
     
    </div>
  );
};

export default Card;
