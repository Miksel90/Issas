import heroImage from "../../assets/Images/IssasHero.webp";

const Hero = () => {
  return (
    <div className="relative bg-primary w-full flex flex-col min-h-screen">
      {/* Ensure the overlay is behind the header */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="flex items-center justify-center h-screen relative z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
