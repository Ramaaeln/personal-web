import Sidebar from "../components/Fragments/Sidebar";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";

const SkillsPage = () =>{
    return(
        <div className="bg-black text-white">
            <HeaderLayouts/>
            <div className="flex ">
            <Sidebar/>
            <div className="ml-7 border w-3/5 h-fit p-10 rounded border-gray-800  mt-10">
                <div className="grid grid-cols-4 justify-items-center">
                <span className="text-orange-500 ri-html5-line text-4xl"></span>
                <span className="text-blue-400 ri-css3-line text-4xl"></span>
                <span className="text-purple-500 ri-php-line text-4xl"></span>
                <span className="text-yellow-400 ri-javascript-line text-4xl"></span>
                </div>

                <div className="grid justify-items-center mt-20 mb-20">
                <button className="bg-gray-800 p-2 rounded ">
                    Ramaa`s Skills
                </button>
                </div>

                <div className="grid grid-cols-4 justify-items-center">
                <span className="text-sky-500 ri-reactjs-line text-4xl"></span>
                <span className="text-gray-300 ri-database-2-line text-4xl"></span>
                <span className="text-green-600 ri-nodejs-line text-4xl"></span>
                <span className="ri-microsoft-line text-4xl"></span>
                </div>

            </div>
            </div>
        </div>
    )
}
export default SkillsPage;