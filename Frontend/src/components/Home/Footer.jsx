import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className="font-poppins mt-8"> 
    <hr></hr>
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">

  <nav >
    <div className="grid grid-flow-col gap-4">
    <div className="text-3xl cursor-pointer"><a href="https://www.linkedin.com/in/shushant-priyadarshi/ " target="_blank"><FaLinkedin /></a></div>
    <div className="text-3xl cursor-pointer"><a href="https://github.com/Shushant-Priyadarshi" target="_blank"><FaGithub/></a></div>
    <div className="text-3xl cursor-pointer"><a href="https://twitter.com/ceutical_" target="_blank"  ><FaSquareXTwitter/></a></div>

    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Shushant</p>
  </aside>
</footer>
    </div>
    </>
  );
}

export default Footer;
