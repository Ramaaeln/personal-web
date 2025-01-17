import Sidebar from "../../Fragments/Sidebar";
import Ulist from "./ulist";

const PageEleActivity = () =>{
    return(
        <div className="flex ">
            <Sidebar/>
                <div className="ml-7  w-3/5   mt-10 text-white">
                    <div className="justify-items-center">
                <Ulist/> 
                </div>                   
                </div>
            </div>
)
}
export default PageEleActivity;