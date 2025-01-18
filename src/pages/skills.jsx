import Sidebar from "../components/Fragments/Sidebar";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";

const dataskills = [
    {
        nama:'HTML5',
        class:'text-orange-500 ri-html5-line text-4xl'
    },
    {
        nama:'CSS3',
        class:'text-blue-400 ri-css3-line text-4xl'
    },
    {
        nama:'PHP',
        class:'text-purple-500 ri-php-line text-4xl'
    },
    {
        nama:'Javascript',
        class:'text-yellow-400 ri-javascript-line text-4xl'
    },
    {
        nama:'ReactJs',
        class:'text-sky-500 ri-reactjs-line text-4xl'
    },
    {
        nama:'Postgress',
        class:'text-gray-300 ri-database-2-line text-4xl'
    },
    {
        nama:'ExpressJs',
        class:'text-green-600 ri-nodejs-line text-4xl'
    },
    {
        nama:'Word',
        class:'text-blue-500 ri-file-word-2-line text-4xl'
    },
    {
        nama:'Excel',
        class:'text-green-500 ri-file-excel-2-line text-4xl'
    },
    {
        nama:'PowerPoint&Canva',
        class:'text-orange-500 ri-file-ppt-2-line text-4xl'
    },
    {
        nama:'TailwindCSS',
        class:'text-blue-500 ri-tailwind-css-fill text-4xl'
    },
]

const SkillsPage = () =>{
    return(
        <div className="bg-black text-white">
            <HeaderLayouts/>
            <div className="flex ">
            <Sidebar/>
            <div className="ml-7 border w-3/5 h-1/2 p-20 rounded border-gray-800  mt-10">

                <div 
                className="grid grid-cols-4   gap-20 justify-items-center
                
                "
                >

                {dataskills.map((data,index)=>(
                <span  
                key={index}
                className={`${data.class} 
                shadow-xl p-1 shadow-gray-900 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow hover:shadow-gray-900 drop-shadow-2xl shadow-inner
                 relative overflow-hidden cursor-pointer group 
                    hover:overflow-visible focus-visible:outline-none
                 `}
                aria-describedby="tooltip-01"
                 
                 >

                <span
                        role="tooltip"
                        id="tooltip-01"
                        className="invisible  absolute font-sans top-full left-1/2 z-10 mt-3
                         w-fit -translate-x-1/2 rounded bg-slate-950 
                         p-2 text-sm text-white opacity-0 transition-all before:invisible before:absolute 
                         before:left-1/2 before:bottom-full 
                         before:z-10 before:mt-2 before:-ml-2 before:border-x-8 
                         before:border-b-8 before:border-x-transparent 
                         before:border-b-slate-950 before:opacity-0 
                         before:transition-all before:content-[''] 
                         group-hover:visible group-hover:block group-hover:opacity-100 
                         group-hover:before:visible group-hover:before:opacity-100"
                    >
                         {data.nama}
                    </span>
                </span>
            ))}
                </div>

            </div>
            </div>
        </div>
    )
}
export default SkillsPage;