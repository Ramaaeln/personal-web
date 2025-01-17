import CertificateEle from "../components/Elements/Certificate";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";

const CertificatePage = () =>{
    return(
        <div className="bg-black h-screen text-white">
            <HeaderLayouts/>
            <div>
                <CertificateEle/>
            </div>
        </div>
    )
}
export default CertificatePage;