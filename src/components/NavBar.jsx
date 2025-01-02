import logo from '../assets/images/Logontic.png'; 
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="bg-dark-purple border-sky-900 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              {/* <!-- Logo --> */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/">
                <img
                  className="h-10 w-auto"
                  src={ logo}
                  alt="Our Web "
                />
                <span className=" text-white font-bold text-2xl  ml-2"
                  >Edulink</span
                >
              </a>
              <div className=" hidden md:block md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    >Home</a
                  >
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );


}
export default NavBar ;