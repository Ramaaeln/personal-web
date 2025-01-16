import EleProjects from "../components/Elements/Projects";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";

const ProjectPage = ()=>{
    return(
        <div className="bg-black h-full">
            <HeaderLayouts/>
            <EleProjects/>
        </div>
    )
}
export default ProjectPage;