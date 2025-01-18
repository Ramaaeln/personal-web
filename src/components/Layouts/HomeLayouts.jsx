import Activity from "../Elements/Activity";
import Projects from "../Fragments/Projects";
import GitHubCalendar from 'react-github-calendar';
import Sidebar from "../Fragments/Sidebar";
import SkillsEle from "../Elements/Skills";


const HomeLayouts = () =>{
    return(
        <div className="flex">
       <Sidebar/>

        <div className="mt-7 ml-10  w-9/12  
        xl:ml-7 xl:w-3/5 
        md:mr-2 md:w-3/5  md:mr-3 
        sm:w-3/5 sm:mr-2 
        
        ">
        
        <div >
            <span>Documentation Project</span>
            <div className="grid grid-cols-1  w-full p-2 gap-1
            xl:grid-cols-2 xl:w-full
            md:gap-2 md:w-full
            sm:grid-cols-2 sm:gap-2 sm:w-full 
            ">
                <Projects/>
                
            </div>
        </div>
          <SkillsEle/>
        <div className="mt-7">
        <GitHubCalendar username="Ramaaeln" />
        </div>

        <div className="mt-7">
            <span>Activity</span>
            <div className="justify-items-center 
            xl:ml-0 md:ml-0 sm:ml-0 ml-12
            ">
            <Activity/>
            </div>
        </div>                


        </div>
        </div>
    )
}
export default HomeLayouts;