import ImageURL from "../Image";

const UpdatesModals = ()=>{
    return(
        <div className="ml-4">
                <small className="text-gray-400">
                    New Updates
                </small>
                <div className="flex">
                <ImageURL 
                src="https://avatars.githubusercontent.com/u/148547135?v=4"
                className="w-5 mr-4 rounded-full"
                />
                <small>
                <a href="">Ramdnelnn/waroeng-dul</a>
                </small>
                <small className="inset-y-fit right-4 absolute">
                    Dec 13, 2024
                </small>
                </div> 
            </div>
    )
}
export default UpdatesModals;