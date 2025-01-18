import Profile from "../Image/profile";

const Card = (props) =>{
    const {src} = props;
    return(
        <div className="overflow-hidden w-full p-1  rounded  text-white  shadow-slate-200
        
        ">
        
          <div className="grid grid-cols-1 gap-2 
          ">

          <div className="bg-gray-900 rounded">
          <div className="p-6 ">
            <header className="flex gap-4">
              <div className="rounded-full">
              <Profile/>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">
                  <a href="https://waroeng-dul.vercel.app/" target="_blank">WaroEng.e dul</a>
                </h3>
                <p className="text-sm text-white"> Dec 8 - 13, 2024</p>
              </div>
            </header>
          </div>
          
          <figure>
            <img
              src={src}
              className="object-ratio-video"
            />
          </figure>

          <div className="p-6">
            <p>
              I’m excited to share the latest project I’ve completed: WaroEng.e Dul, a web-based 
              food ordering application built with React JS, Express JS, and 
              PostgreSQL (Supabase) for the database.
              <br /><br />
              Key Features of the Application: <br />
              💡 Interactive Menu Cards with "Add to Cart" and "Add to Checkout" buttons. <br />
              💡 Menu Filters: Main Dishes, Snacks, Hot Beverages, and Cold Beverages. <br />
              💡 Search functionality to help users easily find the menu items they’re looking for. <br />
              💡 Shopping Cart with the ability to increase quantity and remove items. <br />
              💡 A fully responsive design for an optimal user experience across different devices. <br />
              <br />
              The application is hosted on Glitch for the backend and deployed to Vercel for the frontend, 
              accessible via the following link:
              <strong> 
              <a href="https://waroeng-dul.vercel.app/" className="text-blue-600"> WaroEng.e dul</a>
              </strong>
              <br />
              🔧 Technologies Used: <br />
              <span className="text-sky-500 ri-reactjs-line"></span> Frontend: React JS <br />
              <span className="text-green-600 ri-nodejs-line"></span> Backend: Express JS <br />
              <span className="text-gray-300 ri-database-2-line"></span> Database: PostgreSQL (Supabase) <br />
              👨‍💻Hosting: Glitch (Backend), Vercel (Frontend) <br /> <br />
              This project has been a great way for me to improve my full-stack development skills and 
              create a functional web application. I appreciate the support and feedback from 
              everyone during the development process!
            </p>
            </div>
          </div>


        </div>
      </div>
    )
}
export default Card;