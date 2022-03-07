import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto  ">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- primary nav --> */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span className="font-bold">Kemke12</span>
                </a>
              </div>
              {/* <!-- primary nav --> */}
              <div className="flex items-center space-x-1">
                <Link
                  to="/"
                  className=" py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Web-GIS
                </Link>
                <Link
                  to="DownloadMapScreen"
                  className=" py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Download map
                </Link>
              </div>
            </div>
            {/* secondary nav */}
            <div className="flex items-center space-x-1 pr-2">
              <Link
                to="AboutScreen"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded hover:text-yellow-800 transition duration-300"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
