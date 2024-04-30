import { NavLink } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";
import { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";

const Nav = () => {
  const { logOutUser, user } = UseAuth();
  const [showEmail, setShowEmail] = useState(false);
  const { displayName, photoURL, email } = user || {};

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
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
      <div className="navbar bg-base-100  shadow-md rounded-b-lg px-5 -mt-7">
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
              className="menu menu-sm dropdown-content mt-3 z-[10]  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <p className="font-bold lg:text-4xl text-xl  text-gray-400">
            <span className="lg:text-5xl text-4xl text-orange-500">D</span>
            estination
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
          {/* Light and Dark Mode */}

          <div className="mr-5 lg:flex md:flex hidden">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleToggle}
                type="checkbox"
                className="theme-controller"
                // value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <>
              <div>
                <div
                  onMouseLeave={() => setShowEmail(false)}
                  onMouseEnter={() => setShowEmail(true)}
                  className="avatar relative"
                >
                  <div className="lg:w-9 md:w-9 rounded-full ring-2  ring-teal-600 mr-5 ">
                    <img
                      className="lg:block md:block hidden"
                      src={
                        user?.photoURL ||
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
                className="px-6 py-3 rounded-md lg:block md:block hidden text-orange-500 bg-gray-200 font-bold"
              >
                LogOUT
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-6 py-3 rounded-md lg:block md:block hidden text-orange-500 bg-gray-200 font-bold"
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
