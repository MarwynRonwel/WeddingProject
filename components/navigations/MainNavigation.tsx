const MainNavigation = () => {
  const classname =
    "hover:text-gray-800 border-b border-transparent hover:border-black pb-4 cursor-pointer duration-300";
  return (
    <>
      <nav className="w-full pt-4 bg-transparent hover:bg-white duration-500 fixed border-b border-gray-200">
        <section className="mb-1.5 text-center">
          <div className="text-[#72151f] head-text text-5xl uppercase tracking-wider">
            J & M
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center gap-x-10 text-gray-400 text-sm tracking-widest pt-1 uppercase">
            <p className={classname}>Home</p>
            <p className={classname}>Our Story</p>
            <p className={classname}>The Event</p>
            <p className={classname}>Gallery</p>
            <p className={classname}>RVSP</p>
          </div>
        </section>
      </nav>
    </>
  );
};

export default MainNavigation;
