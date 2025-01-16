import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import HomeLayouts from "../components/Layouts/HomeLayouts";

const HomePage = () =>{
    return(
    <div className="bg-black  h-full pb-10 text-white" >
      <HeaderLayouts/>
      <HomeLayouts/>
    </div>
    )
}
export default HomePage;