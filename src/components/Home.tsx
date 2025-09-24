// Home.jsx
function Home() {
  return (
    <section className="flex flex-col lg:flex-row w-full flex-1">
      <div className="flex-1 flex-col text-white flex gap-5 lg:gap-[5rem] px-8 md:px-[100px] lg:px-[150px] justify-center mt-0 md:mt-10 lg:mt-0">
        <h2 className="text-2xl uppercase text-[var(--Blue-300)] lg:text-start text-center">
          So, you want to travel to
        </h2>
        <h3 className="text-6xl md:text-8xl lg:text-[10rem] uppercase second-font font-thin lg:text-start text-center">
          Space
        </h3>
        <p className="tracking-wider text-base text-[var(--Blue-300)] text-center lg:text-start">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex-1 flex flex-col text-white text-center lg:text-start items-center justify-center">
        <div className="bg-white text-black rounded-full w-60 h-60 flex items-center justify-center mb-[50px] lg:mb-0">
          <p className="text-3xl uppercase second-font font-thin">Explore</p>
        </div>
      </div>
    </section>
  );
}


export default Home;
