import ListStyle from "../List";

const SkillsEle = () =>{
    return(
        <div className="mt-7">
        <span>Skills</span>
        <div className="w-full ">
            <div className="grid grid-cols-4 justify-items-center content-center">
                <div className="flex items-center">
                    <i className="text-xl text-orange-500 ri-html5-line"></i>
                    <small>HTML</small>
            </div>
                <div className="flex items-center">
                    <i className="text-xl text-blue-400 ri-css3-line"></i>
                    <small>CSS</small>
            </div>
                <div className="flex items-center">
                    <i className="text-xl text-sky-500 ri-reactjs-line"></i>
                    <small>ReactJS</small>
                </div>
                <div className="flex items-center">
                    <i className="text-xl text-gray-300 ri-database-2-line"></i>
                    <small>Postgress</small>
            </div>

            </div>
            <div className="flex justify-center mt-8">
                    <ListStyle href="/skills" 
                    classname="bg-gray-800 w-fit p-1 rounded text-sm "
                    className="hidden"
                    linkclass="text-sm block"
                    > 
                        Show More
                    </ListStyle>
            </div>
        </div>
    </div>
    )
}
export default SkillsEle;