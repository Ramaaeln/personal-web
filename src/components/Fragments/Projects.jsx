import DokumProject from "../Elements/Home/project";
import Stack from "../Elements/Home/stack";

const dataprojects = [
    {
        nama:'waroeng-dul',
        link:'https://waroeng-dul.vercel.app/',
        status:'public',

        react:'React JS',
        classreact:'text-sky-500 ri-reactjs-line',
        db:'Postgres',
        classdb:'text-gray-300 ri-database-2-line',
        node:'Node JS',
        classnode:'text-green-600 ri-nodejs-line',
    },
    {
        nama:'personal-web',
        link:'',
        status:'coming soon',
        
        react:'React JS',
        classreact:'text-sky-500 ri-reactjs-line',
    },
    {
        nama:'bookshelf',
        link:'',
        status:'coming soon',
        
        php:'PHP',
        classphp:'text-purple-500 ri-php-line',
        db:'MySQL',
        classdb:'text-gray-300 ri-database-2-line',
        
    },
    {
        nama:'notesyou',
        link:'',
        status:'coming soon',
        react:'React JS',
        classreact:'text-sky-500 ri-reactjs-line',
    },
    
]

const Projects = () =>{
    return(
        < >
        {dataprojects.map((data,index) =>(
        <div key={index} className="border p-3 rounded border-slate-700 shadow mt-3 ">
            <DokumProject 
                href={data.link}
                target="_blank"
                nama={data.nama}
                status={data.status} />
        <div className="flex items-center gap-1 mt-2">
            <Stack 
            classname={data.classnode}
            stack={data.node }/>
            <Stack 
            classname={data.classreact} 
            stack={data.react}/>
            <Stack 
            classname={data.classphp} 
            stack={data.php}/>
            <Stack 
            classname={data.classdb} 
            stack={data.db}/>
            </div>
            </div>
        ))}
        </>
    )
}
export default Projects;