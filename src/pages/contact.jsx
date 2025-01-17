import ContactEle from "../components/Elements/Contact";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";

const ContactPage = ()=>{
    return(
        <div className="bg-black  h-screen text-white">
            <HeaderLayouts/>
            <ContactEle/>
        </div>
    )
}
export default ContactPage;