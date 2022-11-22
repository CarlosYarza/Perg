import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="bg-white">
      <div className="hidden z-30 mt-0 w-full pl-96 center sm:flex font-magistrat-light italic xs:text-transparent sm:text-black text-3xl filter invert  mix-blend-difference flex justify-center absolute">
        <p>/website under construction</p>
      </div>
      <div className=" flex items-center justify-around relative ">
        <div className="w-1/3 flex justify-center">
          <button className="filter blur-sm text-md md:text-6xl sm:text-2xl cursor-not-allowed">
            show
          </button>
        </div>
        <div className="z-20 w-1/3 flex justify-center">
          <div>
            <Link href="https://www.instagram.com/perg_634/?hl=en">
              <a target="_blank">
                <Image src="/prg_group_22.svg" alt="me" width="430" height="644" className=" cursor-pointer"/>
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
