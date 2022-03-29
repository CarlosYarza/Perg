import Logo from "../Logo";

const Navbar = () => {
  return (
    <>
      <nav className="grid grid-cols-navbar items-center justify-between flex-wrap px-2 md:px-8 -mb-2 xl:mb-6">
        <div className="flex justify-start self-start">
          {/* <button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center opacity-50 cursor-not-allowed"> */}
          <a className="text-xs filter blur-sm inline-flex w-auto w-full px-3 py-2 md:py-0 rounded text-black font-magistrat-light cursor-not-allowed">
            eng
          </a>
        </div>
        <div className="mt-2 md:mt-0">
          <Logo />
        </div>
        <div className="flex justify-end self-start">
          <div className="flex-col">
            <div className="flex flex-row w-auto items-start">
              <a className="hidden sm:block text-xs filter blur-sm inline-flex w-auto w-full px-3 py-2 md:py-0 rounded text-black font-magistrat-light cursor-not-allowed">
                search
              </a>
              <a className="text-xs filter blur-sm inline-flex w-auto w-full px-3 py-2 md:py-0 rounded text-black font-magistrat-light cursor-not-allowed">
                bag
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
