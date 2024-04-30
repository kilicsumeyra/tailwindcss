import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="social-icon-li bg-blue-600">
          <a className="social-icon-a" href="https://www.linkedin.com/in/sumeyrakilic/">
            Linkedin <FaLinkedin size={30}/>
          </a>
        </li>
        <li className="social-icon-li bg-[#333]">
          <a className="social-icon-a" href="https://github.com/kilicsumeyra">
            Github <FaGithub size={30}/>
          </a>
        </li>
        <li className="social-icon-li bg-green-800">
          <a className="social-icon-a" href="/">
            Email <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className="social-icon-li bg-gray-600">
          <a className="social-icon-a" href="/">
            Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
