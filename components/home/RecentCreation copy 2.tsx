function RecentCreation() {
  return (
    <section>
      <div className="w-full h-screen py-2 scroller relative  mx-auto">
        <div className="py-10 relative z-10">
          <h1 className="text-4xl font-bold">Home</h1>
        </div>
        <div className="w-full h-[80vh] absolute top-0 scrollerItem">
          <div className="w-full bg-neutral-400 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            01
          </div>
        </div>
        <div className="w-full h-[80vh] absolute top-8 scrollerItem">
          <div className="w-full h-[80vh] bg-neutral-500 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            02
          </div>
        </div>
        <div className="w-full h-[80vh] absolute top-16 scrollerItem">
          <div className="w-full h-[80vh] bg-neutral-600 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            03
          </div>
        </div>
        <div className="w-full h-[80vh] absolute top-24 scrollerItem">
          <div className="w-full h-[80vh] bg-neutral-700 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            04
          </div>
        </div>
        <div className="w-full h-[80vh] absolute top-32 scrollerItem">
          <div className="w-full h-[80vh] bg-neutral-800 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            05
          </div>
        </div>
        <div className="w-full h-[80vh] absolute top-40 scrollerItem">
          <div className="w-full h-[80vh] bg-neutral-900 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            06
          </div>
        </div>
        <div className="w-full h-[80vh] absolute top-48 scrollerItem">
          <div className="w-full h-[80vh] bg-neutral-950 rounded-2xl text-white text-6xl flex items-center justify-center font-bold">
            07
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentCreation;
