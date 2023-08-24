import React from "react";
import Image from "next/image";
import logo from "../public/logo.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center" >
      <div className="p-5" ><Image src={logo} alt="logo" width={100} height={20}   /></div>
      <div>
        <ul className="flex gap-5 text-sm " >
          <li>Emotions</li>
          <li>Manifesto</li>
          <li>Self-Awareness Test</li>
          <li>Work with us</li>
        </ul>
      </div>
      <div className="bg-black text-white w-fit rounded-full m-5 h-fit p-2 flex justify-center items-center text-sm ">Download App</div>
    </nav>
  );
};

export default Navbar;
