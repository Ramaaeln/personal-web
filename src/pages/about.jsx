import ImageURL from "../components/Elements/Image";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import meImage from '../assets/me.jpg'

const AboutPage = () =>{
    return(
        <div className="text-white bg-black h-screen">
            <HeaderLayouts/>
            
            <div 
            className="flex mx-96  
            justify-center   mt-20">
                <ImageURL
                src={meImage}
                className="w-64 rounded-xl"
                />

                <p className="ml-7 text-justify p-3">
                Hi, I`m 
                <span className="text-yellow-300"> Abdullah Ramadan Elansary </span>  
                 u can call me <span className="text-yellow-300">Rama</span>, 
                 a fourth-semester Informatics Engineering student 
                focusing on full-stack web development. I'm learning the React.js, Express.js, and TailwindCSS Frameworks and Tools
                to build responsive and functional web applications.
                <br /><br />
                I am capable of working both independently and as part of a team.
                I believe that good collaboration leads to more innovative and effective
                solutions.
                Furthermore, I am always eager to learn and develop my skills by
                exploring new knowledge or technologies that can enhance the quality
                of my work.
                <br /><br />
                I am open to oppotunities for collaboration on exciting projects or
                joining teams focused on web development technologies 🙌.
                </p>
            </div>
                
        </div>
    )
}
export default AboutPage;