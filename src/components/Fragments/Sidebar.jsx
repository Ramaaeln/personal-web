import ImageURL from "../Elements/Image";
import ListStyle from "../Elements/List";

const Sidebar = () =>{
    return(
        <div className=" ml-32 mt-10 w-1/5 text-white h-screen">
        <ImageURL
        src="https://avatars.githubusercontent.com/u/148547135?v=4"
        className="rounded-full mb-7 "
        />
        <strong>Abdullah Ramadan Elansary</strong><br />
        <span className="text-gray-400">Teknik Informatika | Fullstack Development</span>
        <p className="text-justify">
        Hi, I`m Rama, a third-semester Informatics Engineering student with a focus on full-stack web development. 
        I am proficient in using technologies 
        like Node.js, React.js, Express.js, and TailwindCSS to build responsive and functional web applications.
        ...
        </p>
        
        <div className="flex justify-center mt-2">
        <button className="p-1 rounded bg-gray-900 w-full">
            <a href=""
            className="block"
            >Show More</a>
        </button>
        </div>

        <ListStyle 
        href="https://www.linkedin.com/in/ramdneln/" target="_blank" 
        className="ri-links-line ">
            <small>Linkendin </small>
        </ListStyle>
        <ListStyle 
        href="https://github.com/Ramaaeln" 
        className="ri-links-line ">
            <small>GitHub </small>
        </ListStyle>
        <ListStyle 
        href="https://www.instagram.com/ramdneln/profilecard/?igsh=ajMzaW0yeWxvZ3Bx" 
        className="ri-links-line ">
            <small>Instagram </small>
        </ListStyle>
        </div>
    )
}
export default Sidebar;