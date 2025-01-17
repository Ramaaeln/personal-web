import { Link } from "react-router-dom";

const DokumProject = (props) =>{
    const {href,target,nama,status} = props;
    return( 
        <div>
            <strong><Link 
                    to={href} 
                    target={target}
                    className="text-sky-600">
                        {nama}
                    </Link></strong>
        <small className="text-gray-500 float-right">{status}</small>
        </div>
                
    )
}
export default DokumProject;