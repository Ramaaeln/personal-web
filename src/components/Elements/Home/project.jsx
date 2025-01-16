const DokumProject = (props) =>{
    const {href,target,nama,status} = props;
    return( 
        <div>
            <strong><a 
                    href={href} 
                    target={target}
                    className="text-sky-600">
                        {nama}
                    </a></strong>
        <small className="text-gray-500 float-right">{status}</small>
        </div>
                
    )
}
export default DokumProject;