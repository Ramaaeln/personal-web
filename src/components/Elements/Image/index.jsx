const ImageURL = (props) =>{
    const {src,className} = props;
    return(
        <img 
        src={src} 
        className={className} />
    )
}
export default ImageURL;