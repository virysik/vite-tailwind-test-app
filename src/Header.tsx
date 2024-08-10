function Header() {
  return (
    <header className="relative px-0 pt-0">
      <div className="max-w-[1728px] max-h-[972px] mx-auto my-0">
        {/* <img
          src="src/assets/hero1.webp"
          alt="img"
          className="block max-w-[100%]"
        /> */}

        <picture>
          <source
            srcSet="src/assets/hero1.webp 1x, src/assets/hero1.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="src/assets/hero1.jpg 1x, src/assets/hero1.jpg 2x"
            type="image/jpeg"
          />
          <img
            src="src/assets/hero1.jpg"
            alt="furniture"
            className="block max-w-[100%]"
          />
        </picture>
      </div>
      <nav className="absolute top-0 left-0 w-[100%] p-3 sm:pl-6 md:pt-6 sm:pr-12 2xl:pt-12 2xl:pl-12 2xl:pr-24 flex justify-between gap-2 text-main-light">
        <div className="flex font-montserrat">
          <a
            href="#"
            className=" mr-6 2xl:mr-12 sm:text-[22px] md:text-[32px] lg:text-[42px] 2xl:text-[64px] font-semibold leading-[1.22]"
          >
            FELT
          </a>
          <h1 className="sm:text-[18px] lg:text-[26px] 2xl:text-[48px] font-bold leading-tight tracking-wider">
            Furniture that <br /> Everyone
            <br /> Loves
          </h1>
        </div>
        <ul className="hidden md:flex md:gap-6 2xl:gap-12 font-poppins md:text-[16px] lg:text-[20px] 2xl:text-[32px]  font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
