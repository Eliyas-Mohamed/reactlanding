
import Description from "./Description"
import  Header  from "../atoms/Header"
import Button from "../atoms/Button"
const HeaderAndDescriptionCTA=({headerText,descriptionText, className,size,buttonText})=>(
    <>
    <Header size={size}>{headerText}</Header>
    <Description descriptions={descriptionText} size={size}/>
    {buttonText&& <Button size={"md"} className={"button-dark"}>Purchase Now</Button>}
    
    </>
)
export default HeaderAndDescriptionCTA