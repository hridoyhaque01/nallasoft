function About() {
  const titleTexts = [
    "A",
    "b",
    "o",
    "u",
    "t",
    " ",
    "N",
    "a",
    "l",
    "l",
    "a",
    "s",
    "o",
    "f",
    "t",
  ];
  return (
    <section
      className="container3x pt-6 sm:pt-10 md:pt-16 lg:pt-20"
      id="homeAbout"
    >
      <div className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 bg-text-900 rounded40 rounded-b-none">
        <h2 className="title2xl text-center aboutTitle whitespace-pre">
          {titleTexts.map((text, index) => (
            <span className="inline-block" key={index}>
              {text}
            </span>
          ))}
        </h2>
      </div>
      <div className="py-6 sm:py-10 md:py-16 xl:py-20 px-4 sm:px-8 md:px-10 xl:px-12 rounded40 border-t border-lime-100 bg-black-900 -mt-6 sm:-mt-8 md:-mt-10 aboutBox">
        <div className="w-full max-w-[918px]">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase aboutTitle">
            who are we
          </h3>
          <div className="h-[1px] bg-greenGradientBdr mt-3 -scale-x-[1]"></div>
          <p className="mt-6 text-sm sm:text-base md:text-xl font-normal aboutDescription transparentText">
            Nallasoft is dedicated to providing top-tier software solutions that
            exceed expectations. With a focus on UI/UX design, development, and
            mobile apps, we help businesses achieve their goals through
            innovative and effective technology.
          </p>
        </div>
        <div className="w-full max-w-[918px] ml-auto text-right mt-10 sm:mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase subtitle">
            Why US
          </h3>
          <div className="h-[1px] bg-greenGradientBdr mt-3"></div>
        </div>
        <ul className="text-xxs sm:text-sm md:text-base xl:text-xl flex items-center justify-end flex-wrap list-disc list-inside gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-5 md:mt-6 aboutLists">
          <li>Client-Centric Approach</li>
          <li>Innovative Solutions</li>
          <li>Quality and Efficiency</li>
          <li>Competitive Pricing</li>
          <li>Strong Team</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
