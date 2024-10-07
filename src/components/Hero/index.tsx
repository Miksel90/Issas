import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/Images/IssasHero2.webp";
import DefaultButton from "../Buttons/DefaultButton";
import { useTranslator } from "../Translator/useTranslator";

const Hero = () => {
  const navigate = useNavigate();
  const { translate } = useTranslator();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="relative bg-primary w-full flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="flex items-center justify-center h-screen relative z-0">
        <img
          src={heroImage}
          alt="ISSAS GULV varebil foran Holmenkollen skimuseum"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-between py-10 z-20 font-primary">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-black text-6xl font-bold text-shadow-lg mb-2 text-center">
            ISSAS GULV
          </h1>
          <h2 className="text-black text-3xl font-bold text-shadow-lg text-center px-2">
            {translate("Din Profesjonelle Gulvlegger")}
          </h2>
        </div>
        <div className="flex flex-col items-center mb-5 gap-10">
          <DefaultButton size="large" onClick={handleClick}>
            {translate("Kontakt Oss")}
          </DefaultButton>
          <p className="text-black text-3xl text-shadow-lg text-wrap md:text-nowrap text-center px-4 md:px-0">
            {translate("Designgulv, Tepper, Parkett, Fliser og Flytesparkling")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
