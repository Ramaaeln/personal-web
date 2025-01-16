import Profile from "../Elements/Image/profile";
import ModalComponent from "./Modals";

const Header = () =>{
    return(
        <div className="items-center flex">
            <Profile/>
            <span>
              Ramaa 
            </span> 
            <i className="ri-code-s-slash-fill ml-2 "></i>
            <div className="absolute inset-y-3 right-2">
            <ModalComponent/>
          </div>
        </div>
    )
}
export default Header;