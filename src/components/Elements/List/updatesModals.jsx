import { Link } from "react-router-dom";
import ImageURL from "../Image";

const dataupdates = [
    {
        link:'/projects',
        update:'projects/waroeng-dul',
        tanggal:'Dec 13, 2024',
    },
    {
        link:'/certificate',
        update:'certificate/course-talenthub',
        tanggal:'Dec 13, 2025',
    },
]

const UpdatesModals = ()=>{
    return(
        <div className="ml-4 ">
                <small className="text-gray-400">
                    New Updates
                </small>
            {dataupdates.map((data,index)=>(
                <div 
                key={index}
                className="flex mt-2">
                <ImageURL 
                src="https://avatars.githubusercontent.com/u/148547135?v=4"
                className="w-5 mr-4 rounded-full"
                />
                <small>
                <Link to={data.link}>{data.update}</Link>
                </small>
                <small className="inset-y-fit right-4 absolute">
                    {data.tanggal}
                </small>
                </div> 
            ))}

</div>
    )
}
export default UpdatesModals;