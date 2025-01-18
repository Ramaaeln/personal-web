import Activity from "../Elements/Activity";
import ListStyle from "../Elements/List";

const Navbar = ()=>{
    return(
        <div className="flex hidden gap-1 items-center mt-2 list-none ml-4 text-sm
        xl:gap-4 xl:flex md:flex sm:flex
        ">
          
        <ListStyle 
        href="/" 
        className="ri-book-open-line " 
        classname="hover:bg-gray-900  hover:rounded p-1  " 
        >
        Overview
        </ListStyle>
        
        <ListStyle 
        href="/projects" 
        className="ri-archive-stack-line " 
        classname="hover:bg-gray-900  hover:rounded p-1 " 
        >
        Projects
        </ListStyle>

        <ListStyle 
        href="/skills" 
        className="ri-stack-line"
        classname="hover:bg-gray-900  hover:rounded  p-1  "
        >
        Skills
        </ListStyle>
        <ListStyle 
        href="/activity" 
        className="ri-global-line "
        classname="hover:bg-gray-900  hover:rounded  p-1  "
        >
        Activity
        </ListStyle>
      </div>
    )
}
export default Navbar;