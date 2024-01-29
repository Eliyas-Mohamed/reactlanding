import HeaderAndDescription from "../../Components/molecules/HeaderAndDescriptionCTA";
import Button from "../../Components/atoms/Button";
import Header from "../../Components/atoms/Header";
import "./Pricing.scss";
const Pricing = () => {
  return (
    <div className="position-relative">
      <div class="custom-shape-divider-top-1706511037">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="text-center bg-e7ecff-half py-200">
        <div className="m-auto mw-sm-50">
          <HeaderAndDescription
          size={"md"}
            headerText={"A Price To Suit Everyone"}
            descriptionText={[
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
            ]}
          />

          <div className="price-cover">
            <Header size={"lg"}className="mb-0">$40</Header>
            <p className="fs-16">UI Design kkit</p>
          </div>
          <p className="fs-14 text-grey mb-1">See, One price, Simple</p>
          <Button size={"lg"} className={"fs-14 button-dark"}>Purchase Now</Button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
