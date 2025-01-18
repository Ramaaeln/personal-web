import { Link } from "react-router-dom";
import ImageURL from "../Elements/Image";
import ListStyle from "../Elements/List";

const Sidebar = () =>{
    return(
        <div className="  mt-10 hidden text-white h-screen
        xl:ml-32 xl:w-1/5 xl:block
         md:ml-12 md:w-4/12 md:block
         sm:ml-8 sm:w-6/12 sm:block
        ">
        <ImageURL
        src="https://avatars.githubusercontent.com/u/148547135?v=4"
        className="rounded-full mb-7 "
        />
        <strong className="flex">Abdullah Ramadan Elansary<ListStyle
        target="_blank" 
        href="https://drive.google.com/uc?export=download&id=17f8iPohbiIlHTZyI-vlkc3OL_XgkWCfw"
        download='CV Abdullah Ramadan.pdf' 
        className="ri-links-line -mr-2 ml-1 hover:text-blue-400 ">
        </ListStyle></strong>
        <span className="text-gray-400">Teknik Informatika | Fullstack Development</span>
        <p className="text-justify">
        Hi,I'm Rama, a fourth-semester Informatics Engineering student 
        focusing on full-stack web development. I'm learning the React.js, Express.js, and TailwindCSS Frameworks 
        to build responsive and functional web applications.
        ...
        </p>
        
        <div className="flex justify-center mt-2">
        <button className="p-1 rounded bg-gray-900 w-full">
            <Link to="/about"
            className="block"
            >Show More</Link>
        </button>
        </div>

        
         
        <ListStyle
        target="_blank" 
        href="https://drive.google.com/file/d/17f8iPohbiIlHTZyI-vlkc3OL_XgkWCfw/view?usp=sharing"
        className="ri-links-line ">
            <small>View Resume</small>
        </ListStyle>

        <ListStyle 
        href="https://www.linkedin.com/in/ramdneln/" target="_blank" 
        className="ri-links-line ">
            <small>Linkendin </small>
        </ListStyle>
        <ListStyle 
        href="https://github.com/Ramaaeln" target="_blank"
        className="ri-links-line ">
            <small>GitHub </small>
        </ListStyle>
        <ListStyle 
        target="_blank"
        href="https://www.instagram.com/ramdneln/" 
        className="ri-links-line ">
            <small>Instagram </small>
        </ListStyle>


        </div>
    )
}
export default Sidebar;