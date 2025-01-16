import { Link } from "react-router-dom";

const ListStyle = (props) =>{
    const {children,href,className,classname,target} = props;
    return(
        <li className={`${classname} list-none `}>
          <Link to={href} target={target}>
             <i className={`${className} `}></i>
             {children}</Link>
        </li>
    )
}
export default ListStyle;