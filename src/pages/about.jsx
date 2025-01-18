import ImageURL from "../components/Elements/Image";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import meImage from '../assets/me.jpg'

const AboutPage = () =>{
    return(
        <div className="text-white bg-black h-screen pb-20
        ">
            <HeaderLayouts/>
            
            <div 
            className="grid   bg-black 
            justify-center justify-items-center    mt-20
            xl:w-fit xl:ml-12 xl:h-fit xl:mr-12 xl:flex
            md:w-fit md:ml-12 md:h-fit  md:mr-12 md:grid md:justify-items-center
            sm:w-fit sm:h-fit sm:ml-5 sm:mr-5  sm:grid sm:justify-items-center
            ">
                <ImageURL
                src={meImage}
                className="w-64 h-fit rounded-xl 
                xl:w-80 xl:h-1/2
                md:w-72 md:h-fit
                sm:w-64 sm:h-fit
                "
                />

                <p className=" text-justify p-3 mx-10
                xl:mr-80
                md:mx-12
                sm:mx-10
                ">
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