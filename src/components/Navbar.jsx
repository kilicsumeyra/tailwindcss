import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex justify-between items-center px-4 text-[#eab5b5] h-[80px] w-full fixed bg-[#a44747]">
      <div>
        <h2 className="text-2xl font-semibold">Sümeyra Kılıç</h2>
      </div>
      <ul className="hidden md:flex  gap-3 ">
        <li>
          <Link
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            to="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            to="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            to="skills"
          >
            Skills
          </Link>
        </li>
        <li><Link
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            to="work"
          >
           Works
          </Link></li>
        <li><Link
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            to="contact"
          >
           Contact
          </Link></li>
      </ul>
      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          nav
            ? "absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-[#a44747] "
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <SocialIcons />
    </div>
  );
};

export default Navbar;
