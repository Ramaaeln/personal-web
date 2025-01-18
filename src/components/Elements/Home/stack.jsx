const Stack = (props) =>{
    const {classname,stack} = props;
    return(
        <>
            <i className={`text-xl  ${classname}`}></i>
            <small className="hidden
            xl:block sm:hidden md:block
            " >{stack}</small>
            </>
    )
}
export default Stack;