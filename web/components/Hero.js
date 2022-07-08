import Link from "next/link";
import Image from "./svgs/Unknown 1.svg";
import Oddysey from "./svgs/veit_schmidleitner.svg";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="hidden z-30 mt-36 w-full pl-96 center sm:flex font-magistrat-light italic xs:text-transparent sm:text-black text-3xl filter invert  mix-blend-difference flex justify-center absolute">
        <p>/website under construction</p>
      </div>
      <div className=" flex items-center justify-around relative ">
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl cursor-not-allowed">
            show
          </button>
        </div>
        <div className="z-20 w-1/3">
          <div>
            <Link href="https://www.instagram.com/veit.schmidleitner/?hl=en">
              <a target="_blank">
                <Image className="w-full h-72 md:h-full cursor-pointer"/>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl font-magistrat cursor-not-allowed">
            shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
