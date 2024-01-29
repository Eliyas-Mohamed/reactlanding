import "./Description.scss"
const Description=({descriptions,coverClassName,elementClassName,size})=>{
    return(
        <div className={`${coverClassName} description-cover-${size}`}>
            {
                descriptions.map((text)=>(<p className={`text-description description-${size} ${elementClassName}`}>{text}</p>))
            }
        </div>
    )
}
export default Description