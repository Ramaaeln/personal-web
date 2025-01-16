const Stack = (props) =>{
    const {classname,stack} = props;
    return(
        <>
            <i className={`text-xl  ${classname}`}></i>
            <small >{stack}</small>
            </>
    )
}
export default Stack;