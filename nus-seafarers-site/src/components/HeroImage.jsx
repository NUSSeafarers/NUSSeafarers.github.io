const HeroImage = () => {
  return (
    <section className="w-full flex justify-center items-center bg-[var(--base)] overflow-hidden">
      <div className="relative w-full rounded-2xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        <img
          src="/images/hero_images/moonrock_lagoon.jpg"
          alt="Moonrock Lagoon"
          className="w-full h-[70vh] object-cover"
        />

        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center md:justify-left items-center text-center p-6 md:p-12">
          <h1 className="text-white font-extrabold mb-4 text-[clamp(2rem,5vw,4rem)] drop-shadow-lg leading-tight">
            NUS Seafarers
          </h1>
          <p className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-light drop-shadow-md max-w-2xl">
            To sail is to live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
