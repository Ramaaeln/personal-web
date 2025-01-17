import Sidebar from "../components/Fragments/Sidebar";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";

const dataskills = [
    {
        class:'text-orange-500 ri-html5-line text-4xl'
    },
    {
        class:'text-blue-400 ri-css3-line text-4xl'
    },
    {
        class:'text-purple-500 ri-php-line text-4xl'
    },
    {
        class:'text-yellow-400 ri-javascript-line text-4xl'
    },
    {
        class:'text-sky-500 ri-reactjs-line text-4xl'
    },
    {
        class:'text-gray-300 ri-database-2-line text-4xl'
    },
    {
        class:'text-green-600 ri-nodejs-line text-4xl'
    },
    {
        class:'ri-microsoft-line text-4xl'
    },
]

const SkillsPage = () =>{
    return(
        <div className="bg-black text-white">
            <HeaderLayouts/>
            <div className="flex ">
            <Sidebar/>
            <div className="ml-7 border w-3/5 h-fit p-10 rounded border-gray-800  mt-10">

                <div 
                className="grid grid-cols-4  gap-10 justify-items-center">
                {dataskills.map((data,index)=>(
                <span  
                key={index}
                className={data.class}>

                </span>
            ))}
                </div>

            </div>
            </div>
        </div>
    )
}
export default SkillsPage;