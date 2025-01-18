import { Link } from "react-router-dom";

const DokumProject = (props) =>{
    const {href,target,nama,status} = props;
    return( 
        <div className="grid
        ">
            <strong><Link 
                    to={href} 
                    target={target}
                    className="text-sky-600">
                        {nama}
                    </Link></strong>
        <small className="text-gray-500
        ">{status}</small>
        </div>
                
    )
}
export default DokumProject;