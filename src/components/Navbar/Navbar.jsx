import { FaBarsProgress } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";


const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <a>Home</a>{" "}
      </li>
      <li>
        {" "}
        <a>About Me</a>{" "}
      </li>
      <li>
        {" "}
        <a>Skills</a>{" "}
      </li>
      <li>
        {" "}
        <a>Projects</a>{" "}
      </li>
      <li>
        {" "}
        <a>Contact</a>{" "}
      </li>
    </>
  );

  return (
    <div className="border-b-[1px] border-[#61dbfb] fixed w-full bg-base-100 z-50">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <FaBarsProgress className="text-3xl"/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" ">
            <FaReact className="text-4xl"/>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
        <label className="inline-flex items-center relative ">
            <input className="peer hidden" id="toggle" type="checkbox" />
            <div className="relative w-[70px] h-[27px] bg-white peer-checked:bg-zinc-500 rounded-3xl 
            after:absolute after:content-[''] after:w-[25px] after:h-[25px] after:bg-gradient-to-r
             from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 
             after:rounded-full after:top-[1px] after:left-[1px] active:after:w-[50px] 
             peer-checked:after:left-[68px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 
             after:duration-300 after:shadow-md"></div>
            <IoSunnyOutline className="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[5px] text-black" />
            <BsMoonStars className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[5px]"/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
