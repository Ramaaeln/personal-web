import Sidebar from "../../Fragments/Sidebar";
import Card from "./card";

const EleProjects = () =>{
    return(
        <div className="flex text-white">
            <Sidebar/>
            <div className="border mb-7 ml-7 w-3/5 justify-items-center mt-7 h-fit p-7 border-gray-700">
                <Card
                src="https://media.licdn.com/dms/image/v2/D562DAQHHXt_7mJvaXw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1736498283539?e=1737622800&v=beta&t=3QMtPneQiIfTQ9EeBKdZych96kzjlgogMomsJ2js5N8"

                />
            </div>
        </div>
    )
}
export default EleProjects;