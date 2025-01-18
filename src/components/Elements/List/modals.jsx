import ListStyle from ".";

const ListModals = () =>{
    return(
        <div className="mt-10 ml-4 pb-3 border-b border-slate-700 ">
        <ListStyle
        classname="hover:bg-gray-900 p-1 rounded" 
        href="/" 
        className="ri-home-4-line ">
            Home
        </ListStyle>

        <ListStyle
        classname="hover:bg-gray-900 p-1 rounded" 
        href="/about" 
        className="ri-id-card-line" >
            About
        </ListStyle>

        <ListStyle 
        href="/skills" 
        className="ri-stack-line"
        classname="hover:bg-gray-900 rounded  p-1  
        xl:hidden md:hidden sm:hidden inline
        "
        >
        Skills
        </ListStyle>

        <ListStyle
        classname="hover:bg-gray-900 p-1 rounded" 
        href="/certificate" 
        className="ri-award-line">
            Certificate
        </ListStyle>

        <ListStyle
        classname="hover:bg-gray-900 p-1 rounded" 
        href="/projects" 
        className="ri-archive-stack-line">
            Projects
        </ListStyle>

        <ListStyle
        classname="hover:bg-gray-900 p-1 rounded" 
        href="/activity" 
        className="ri-global-line">
            Activity
        </ListStyle>
        
        <ListStyle
        classname="hover:bg-gray-900 p-1 rounded" 
        href="/contact" 
        className="ri-contacts-book-2-line">
            Contact
        </ListStyle>
        </div>
    )
}
export default ListModals;