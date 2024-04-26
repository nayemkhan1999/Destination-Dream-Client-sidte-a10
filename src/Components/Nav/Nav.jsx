import { NavLink } from "react-router-dom";

const Nav = () => {
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
          <NavLink
            to="/login"
            className="btn text-orange-500 bg-gray-200 font-bold"
          >
            LOGIN
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
