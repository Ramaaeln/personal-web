import { Link } from "react-router-dom";

const ListStyle = (props) =>{
    const {children,href,className,classname,target,linkclass,download} = props;
    return(
        <li className={`${classname} list-none `}>
          <Link to={href} target={target} download={download} className={linkclass}>
             <i className={`${className} mr-2`}></i>
             {children}</Link>
        </li>
    )
}
export default ListStyle;