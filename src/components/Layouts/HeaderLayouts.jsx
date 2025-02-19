import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";

const HeaderLayouts = () =>{
    return(

        <div className="w-full sticky z-30 top-0 border-b border-gray-800 text-white bg-black p-2">
            <Header/>
            <Navbar />
        </div>
    )
}
export default HeaderLayouts;