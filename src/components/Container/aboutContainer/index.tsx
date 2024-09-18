import { FaHouse } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { useTranslator } from "../../Translator";

const AboutContainer = () => {
  const { translate } = useTranslator();

  return (
    <div className="flex flex-col mb-4 gap-10 justify-around p-2 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 font-primary">
        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="flex items-center gap-4">
            <FaHouse size={50} className="text-danger" />
            <p className="text-black text-2xl font-semibold font-primary">
              {translate("Vi tilbyr")}
            </p>
          </div>
          <p className="text-black md:w-64 text-lg text-center md:text-left">
            {translate(
              "Vi gjør hele jobben! Rehabilitering og riving av gammelt gulv, levering av nye ferdigbehandlete gulvbelegg, tepper eller linolium."
            )}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="flex items-center gap-4">
            <FaInfoCircle size={50} className="text-success" />
            <p className="text-black text-2xl font-semibold font-primary">
              {translate("Erfaring")}
            </p>
          </div>
          <p className="text-black md:w-64 text-lg text-center md:text-left">
            {translate(
              "Solid familiebedrift som har levert kvalitet siden 1996. Selskapet driftes av Roald og Jonas Selstad."
            )}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="flex items-center gap-4">
            <FaTruck size={50} className="text-info" />
            <p className="text-black text-2xl font-semibold font-primary">
              {translate("Nasjonalt")}
            </p>
          </div>
          <p className="text-black md:w-64 text-lg text-center md:text-left">
            {translate(
              "Vi leverer i hele Norge. Hovedsaklig til bedrifter, kontorlokaler og butikker, men også til privatpersoner."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
