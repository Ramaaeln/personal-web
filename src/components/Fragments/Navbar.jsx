import Activity from "../Elements/Activity";
import ListStyle from "../Elements/List";

const Navbar = ()=>{
    return(
        <div className="flex gap-10 items-center mt-1 list-none ml-4 text-sm">
        <ListStyle href="/" className="ri-book-open-line ">
        Overview
        </ListStyle>
        <ListStyle href="/projects" className="ri-archive-stack-line ">
        Projects
        </ListStyle>
        <ListStyle href="/skills" className="ri-stack-line ">
        Skills
        </ListStyle>
        <ListStyle href="/activity" className="ri-global-line ">
        Activity
        </ListStyle>
      </div>
    )
}
export default Navbar;