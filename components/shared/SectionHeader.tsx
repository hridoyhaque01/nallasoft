function SectionHeader({
  tagTitle = "",
  title = "",
  description = "",
  id = "sectionHeader",
}: {
  tagTitle?: string;
  title?: string;
  description?: string;
  id?: string;
}) {
  const titleTextx = title.split("");
  return (
    <div
      className="flex items-end justify-between overflow-hidden gap-4"
      id={id}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-1 items-center gap-6">
          <h2 className="text-sm sm:text-2xl md:text-4xl font-medium relative sectionTag">
            {tagTitle}
          </h2>
          <div className="w-full max-w-11 sm:max-w-24 md:max-w-[120px] h-0.5 bg-lime-600 rounded-full sectionLine"></div>
        </div>
        <div className="flex flex-1 items-center gap-6">
          <h2 className="text-sm sm:text-2xl md:text-4xl font-medium relative opacity-0 invisible select-none hidden lg:block sectionTag">
            {tagTitle}
          </h2>
          <div>
            <h2 className="text-xl sm:text-4xl md:text-5xl xl:text-7xl font-semibold relative sectionTitle whitespace-pre">
              {titleTextx.map((text, index) => (
                <span className="inline-block" key={index}>
                  {text}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
      <p className="xs:min-w-max text-right text-xxs sm:text-base md:text-xl whitespace-pre-wrap w-[-webkit-fill-available] sectionDescription transparentText">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
