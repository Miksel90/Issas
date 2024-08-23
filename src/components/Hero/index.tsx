import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/Images/IssasHero.webp";
import DefaultButton from "../Buttons/DefaultButton";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="relative bg-primary w-full flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="flex items-center justify-center h-screen relative z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-between py-10 z-20 font-primary">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-white text-6xl font-bold text-shadow-xl mb-2">
            ISSAS
          </h1>
          <p className="text-white text-3xl font-bold text-shadow-xl text-center">
            Din Profesjonelle Gulvlegger
          </p>
        </div>
        <div className="flex flex-col items-center mb-5 gap-10">
          <DefaultButton size="large" onClick={handleClick}>
            Kontakt Oss
          </DefaultButton>
          <p className="text-white text-2xl text-shadow-xl">
            Designgulv, Tepper, Parkett, Fliser og Flytesparkling
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
