import Image from "next/image";

function WorkCard() {
  return (
    <div className="w-full rounded40 overflow-hidden bg-neutral-900 workItem">
      <div className="h-[328px] md:h-[440px] xl:h-[600px] relative overflow-hidden">
        <Image
          src="https://culturizm.com/wp-content/uploads/2024/01/contemporary_art_styles.png.webp"
          alt="work image"
          width={500}
          height={500}
          className="w-full h-full object-cover bg-center rounded40 rounded-t-none"
        />
      </div>
      <div className="px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-8 flex items-start gap-1">
        <div className="flex-1 overflow-hidden truncate">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold sm:font-bold text-lime-400 truncate">
            The Art of Design
          </h3>
          <p className="text-base sm:text-lg md:text-lg font-medium mt-1 sm:mt-2">
            Design
          </p>
        </div>
        <span className="tag">2024</span>
      </div>
    </div>
  );
}

export default WorkCard;
