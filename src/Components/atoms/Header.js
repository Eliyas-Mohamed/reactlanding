import "./Header.scss"
const Header=({size,className,children})=>{
    switch(size){
        case "lg":
            return <h1 className={`fs-50 header-${size} ${className}`}>{children}</h1>
        case "md":
            return <h3 className={`fs-36 header-${size}  ${className}`}>{children}</h3>
        case "sm":
            return <h5 className={`fs-16 header-${size} ${className}`}>{children}</h5>
        default:
            return <h1 className={`fs-50 header-${size} ${className}`}>{children}</h1>
    }
    
}
export default Header