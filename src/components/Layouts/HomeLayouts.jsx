import Activity from "../Elements/Activity";
import DokumProject from "../Elements/Home/project";
import Stack from "../Elements/Home/stack";
import ImageURL from "../Elements/Image";
import ListStyle from "../Elements/List";
import Projects from "../Fragments/Projects";
import GitHubCalendar from 'react-github-calendar';
import Sidebar from "../Fragments/Sidebar";


const HomeLayouts = () =>{
    return(
        <div className="flex">
       <Sidebar/>

        <div className="mt-7 ml-7 w-3/5  ">
        
        <div >
            <span>Documentation Project</span>
            <div className="grid grid-cols-2  w-full p-2 gap-3">
                <Projects/>
                
            </div>
        </div>
            <div className="mt-7">
                <span>Skills</span>
                <div className="w-full ">
                    <div className="grid grid-cols-4 justify-items-center content-center">
                        <div className="flex items-center">
                            <i className="text-xl text-sky-500 ri-reactjs-line"></i>
                            <small>ReactJS</small>
                        </div>
                        <div className="flex items-center">
                            <i className="text-xl text-gray-300 ri-database-2-line"></i>
                            <small>Postgress</small>
                    </div>
                        <div className="flex items-center">
                            <i className="text-xl text-orange-500 ri-html5-line"></i>
                            <small>HTML</small>
                    </div>
                        <div className="flex items-center">
                            <i className="text-xl text-blue-400 ri-css3-line"></i>
                            <small>CSS</small>
                    </div>

                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="p-2 rounded bg-gray-700">
                            <small><a href="" className="block">Show More</a></small>
                        </button>
                    </div>
                </div>
            </div>
        <div className="mt-7">
        <GitHubCalendar username="Ramaaeln" />
        </div>

        <div className="mt-7">
            <span>Activity</span>
            <div className="justify-items-center">
            <Activity/>
            </div>
        </div>                


        </div>
        </div>
    )
}
export default HomeLayouts;