import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="text-base text-gray-500 font-medium">
        <NavLink to="./">Home</NavLink>
      </li>
      <li className="text-base text-gray-500 font-medium">
        <NavLink to="./statistics">Statistics</NavLink>
      </li>
      <li className="text-base text-gray-500 font-medium">
        <NavLink to="./applied-jobs">Applied Jobs</NavLink>
      </li>
      <li className="text-base text-gray-500 font-medium">
        <NavLink to="./blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-blue-400/5 to-violet-600/5">
      <nav className="max-w-7xl mx-auto navbar py-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a to={"/"} className="normal-case text-2xl font-extrabold">
            CareerHub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn hover:opacity-80 font-extrabold capitalize text-white text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Start Apply
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
