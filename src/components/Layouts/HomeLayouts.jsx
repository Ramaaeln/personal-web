import Activity from "../Elements/Activity";
import DokumProject from "../Elements/Home/project";
import Stack from "../Elements/Home/stack";
import ImageURL from "../Elements/Image";
import ListStyle from "../Elements/List";
import Projects from "../Fragments/Projects";
import GitHubCalendar from 'react-github-calendar';
import Sidebar from "../Fragments/Sidebar";
import SkillsEle from "../Elements/Skills";


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
          <SkillsEle/>
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