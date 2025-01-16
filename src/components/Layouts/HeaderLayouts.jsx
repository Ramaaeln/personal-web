import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";

const HeaderLayouts = () =>{
    return(

        <div className="w-full sticky top-0 border-b border-slate-700 text-white bg-black p-2">
            <Header/>
            <Navbar/>
        </div>
    )
}
export default HeaderLayouts;