function CaseStudy() {
  return (
    <section className="sec_p80">
      <div className="h-screen overflow-x-hidden " id="homeCaseStudy">
        <div className="container3x px-0 h-full flex flex-col gap-2 caseStudy">
          <div className="first_sec flex gap-2 flex-1 w-[150%]">
            {Array(10)
              ?.fill(0)
              .map((_, idx) => (
                <div
                  className="w-full min-w-96 h-full bg-black-900 p-10"
                  key={idx}
                >
                  <h3>Hello world</h3>
                </div>
              ))}
          </div>
          <div className="second_sec flex flex-row-reverse gap-2 flex-1 w-[150%]">
            {Array(10)
              ?.fill(0)
              .map((_, idx) => (
                <div
                  className="w-full min-w-96 h-full bg-black-900 p-10"
                  key={idx}
                >
                  <h3>Hello world</h3>
                </div>
              ))}
          </div>
        </div>
        {/* Display the percentage */}
        <div className="percentage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] aspect-square bg-lime-400 text-black-900 flex items-center justify-center text-3xl rounded-full font-bold">
          0%
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
