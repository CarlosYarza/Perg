import Link from "next/link";

import Oddysey from "./svgs/OrbitOddysey.svg";
// import Oddysey from "../assets/oddysey.jpg";
// const oddysey = require("../public/oddysey.jpg");

const Hero = () => {
  return (
    <div className="bg-white">
<<<<<<< HEAD
      <div className="z-30 mt-36 w-full pl-96 center hidden sm:flex font-magistrat-light italic xs:text-transparent sm:text-black text-3xl filter invert  mix-blend-difference flex justify-center absolute">
=======
      <div className="z-30 mt-36 w-full ml-72 font-magistrat-light italic xs:text-transparent sm:text-black text-3xl filter invert  mix-blend-difference flex justify-center absolute">
>>>>>>> fix(sintax): add closing div to hero
        <p>/website under construction</p>
      </div>
      <div className=" flex items-center justify-around relative ">
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl cursor-not-allowed">
            show
          </button>
        </div>
        <div className="z-20 w-1/3">
          <div className="">
            <Link href="https://www.instagram.com/veit.schmidleitner/?hl=en">
              <Oddysey
                target="_blank"
                className="w-full h-72 md:h-full cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl font-magistrat cursor-not-allowed">
            shop
          </button>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
      <div className="z-20 flex flex-col justify-items-center items-center relative">
        <h2>Veit Schmidleitner</h2>
        <h3>ORBIT ODDYSEY</h3>
        <p>March 18 - June 19, 2022</p>
      </div>
    </div>  
>>>>>>> fix(sintax): add closing div to hero
  );
};

export default Hero;
