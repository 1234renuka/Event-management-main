import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-200 transition";

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl backdrop-blur-md px-4">
      <div className="navbar max-w-7xl mx-auto text-white">

        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl bg-white text-gray-800 shadow-lg"
            >
              <li>
                <NavLink to="/" className="hover:text-indigo-600">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="hover:text-indigo-600">
                  Events
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
          >
            EventSphere
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={navLinkStyle}>
                Events
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            to="/signup"
            className="btn rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
