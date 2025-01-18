import Sidebar from "../../Fragments/Sidebar";
import Card from "./card";

const EleProjects = () =>{
    return(
        <div className="flex text-white">
            <Sidebar
            />
            <div className="border mb-32 mx-8  w-full  justify-items-center mt-7 h-fit  border-gray-700
                            xl:w-3/5 xl:h-fit xl:p-7 xl:mb-7 xl:ml-7 xl:mt-7
             md:w-3/6 md:h-fit  md:ml-7
             sm:w-3/6 sm:h-fit sm:mr-7 sm:ml-7
            ">
                <Card
                src="https://media.licdn.com/dms/image/v2/D562DAQHHXt_7mJvaXw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1736498283539?e=1737622800&v=beta&t=3QMtPneQiIfTQ9EeBKdZych96kzjlgogMomsJ2js5N8"

                />
            </div>
        </div>
    )
}
export default EleProjects;