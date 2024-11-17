function About() {
  return (
    <section className="section">
      <h2 className="mb-1 flex justify-center font-semibold tracking-wide sm:text-[1.125rem] lg:text-[1.625rem] 2xl:text-[3rem]">
        About Us
      </h2>
      <div className="md:flex md:flex-row gap-16 justify-between">
        <div className="max-md:mb-4 md:pt-10 md:pb-10 lg:pt-10 lg:pb-24 xl:pt-20 xl:pb-60 md:w-4/12">
          <h3 className="pb-1 sm:pb-2 lg:pb-5 font-semibold tracking-wide sm:text-[1.125rem] lg:text-[1.625rem] 2xl:text-[3rem]">
            Who We Are
          </h3>
          <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] xl:text-[2rem] leading-loose">
            We pride ourselves on being the most loved furniture store in the
            world. We've got everything from couches, to beds, to dining tables,
            and much more.
          </p>
        </div>
        <div className="md:w-8/12 md:flex gap-6 justify-between">
          <picture className="block max-w-full w-72 mt-auto max-md:mb-4">
            <source
              srcSet="src/assets/about1@1x.webp 1x, src/assets/about1@2x.webp 2x"
              type="image/webp"
            />
            <source
              srcSet="src/assets/about1@1x.jpg 1x, src/assets/about1@2x.jpg 2x"
              type="image/jpeg"
            />
            <img
              src="src/assets/about1@2x.jpg"
              alt="about1"
              className="block w-full"
            />
          </picture>
          <picture className="block max-w-full w-72 mt-auto max-md:mb-4 max-md:ml-auto">
            <source
              srcSet="src/assets/about2@1x.webp 1x, src/assets/about2@2x.webp 2x"
              type="image/webp"
            />
            <source
              srcSet="src/assets/about2@1x.jpg 1x, src/assets/about2@2x.jpg 2x"
              type="image/jpeg"
            />
            <img
              src="src/assets/about2@2x.jpg"
              alt="about2"
              className="block w-full"
            />
          </picture>
          <picture className="block max-w-full w-72 md:mb-auto">
            <source
              srcSet="src/assets/about3@1x.webp 1x, src/assets/about3@2x.webp 2x"
              type="image/webp"
            />
            <source
              srcSet="src/assets/about3@1x.jpg 1x, src/assets/about3@2x.jpg 2x"
              type="image/jpeg"
            />
            <img
              src="src/assets/about3@2x.jpg"
              alt="about3"
              className="block w-full "
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default About;
