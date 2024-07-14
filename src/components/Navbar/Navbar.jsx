import { FaBarsProgress } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";




const Navbar = () => {

    const links = <>
      <li> <a>Home</a> </li>
      <li> <a>About Me</a> </li>
      <li> <a>Skills</a> </li>
      <li> <a>Projects</a> </li>
      <li> <a>Contact</a> </li>
    </>

  return (
    <div className="border-b-[1px] border-[#61dbfb]">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBarsProgress />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <a className=" text-xl"><FaReact /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
            links
          }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
