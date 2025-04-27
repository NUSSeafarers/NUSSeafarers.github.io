import heroImg from "../assets/images/hero_images/moonrock_lagoon.jpg";

const HeroImage = () => {
  return (
    <section className="w-full flex justify-center items-center bg-[var(--base)] overflow-hidden">
      <div className="relative w-full">
        {/* Hero Image */}
        <img
          src={heroImg}
          alt="Moonrock Lagoon"
          className="w-full rounded-2xl shadow-lg object-cover max-h-[80vh]"
        />

        {/* Overlay Text */}
        <div className="absolute top-[60%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-left text-white font-sans drop-shadow">
          <h1 className="font-bold mb-2 text-[clamp(1rem,5vw,5rem)]">
            NUS Seafarers
          </h1>
          <p className="text-[clamp(0.25rem,2.5vw,1rem)] font-normal">
            To sail is to live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
