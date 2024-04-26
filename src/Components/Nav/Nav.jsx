import { NavLink } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";
import { useState } from "react";
// import { useState } from "react";

const Nav = () => {
  const { logOutUser, user } = UseAuth();
  const [showEmail, setShowEmail] = useState(false);
  const { displayName, photoURL, email } = user || {};

  // const [showUser, setShowUser] = useState(false);
  // const { photoURL, displayName } = user || {};
  const Link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTourist">AllTouristsSpot</NavLink>
      </li>
      <li>
        <NavLink to="/addTourist">AddTouristsSpot</NavLink>
      </li>
      <li>
        <NavLink to="/myList">MyList</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser().then((result) => {
      console.log(result, "log out sussecfull").catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div className="averia-serif">
      <div className="navbar bg-base-100  shadow-md rounded-b-lg px-5  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <p className="font-bold text-4xl text-gray-400">
            <span className="text-5xl text-orange-500">D</span>estination
          </p>
          <img
            className="w-10 h-10"
            src="https://cdn-icons-png.flaticon.com/128/8170/8170984.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal  px-1">{Link}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <div>
                <div
                  onMouseLeave={() => setShowEmail(false)}
                  onMouseEnter={() => setShowEmail(true)}
                  className="avatar relative"
                >
                  <div className="w-9 rounded-full ring ring-orange-600 mr-5 ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        "https://cdn-icons-png.flaticon.com/128/15735/15735369.png"
                      }
                    />
                  </div>
                </div>
                <div className={`${showEmail ? "flex" : "hidden"}`}>
                  <div className="bg-gray-400 opacity-80 lg:w-[250px] rounded-md text-white absolute z-10 right-[230px] top-[70px]">
                    <div className="p-4 font-semibold">
                      <h1>{displayName || "Not found"}</h1>
                      <h1>{email || "Not Found"}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn text-orange-500 bg-gray-200 font-bold"
              >
                LogOUT
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn text-orange-500 bg-gray-200 font-bold"
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
