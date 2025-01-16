import { Link } from "react-router-dom";

const ComingSoonPage = () =>{
    return(
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
    </h1>
    <p className="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
        <Link to="/" className="text-white border p-4 rounded">Back To On Page</Link>
</div>
    )
}
export default ComingSoonPage;