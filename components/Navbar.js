import React, {useRef} from "react";
import Image from "next/image";
import logo from "../public/logo.png"
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {

  const targetRef= useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
const opacity = useTransform(scrollYProgress,[0,0.1],[1,0])
  return (
    <nav className="flex justify-between items-center mt-48 " >
      <div className="p-5" ><Image src={logo} alt="logo" width={100} height={20}   /></div>
      <motion.div style={{opacity}}  ref={targetRef}>
        <ul className="flex gap-5 text-sm " >
          <li>Emotions</li>
          <li>Manifesto</li>
          <li>Self-Awareness Test</li>
          <li>Work with us</li>
        </ul>
      </motion.div>
      <div className="bg-black text-white w-fit rounded-full m-5 h-fit p-2 flex justify-center items-center text-sm ">Download App</div>
    </nav>
  );
};

export default Navbar;
