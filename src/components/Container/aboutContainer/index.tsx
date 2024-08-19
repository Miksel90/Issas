import { FaHouse } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const AboutContainer = () => {
  return (
    <div className="flex flex-col mb-10 gap-10">
      <h2 className="text-black text-2xl md:text-4xl mt-10 px-2 text-center">
        Alt du trenger til ditt prosjekt
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
        <div className="flex flex-col items-center md:items-start justify-center gap-2 px-10">
          <div className="flex items-center gap-4">
            <FaHouse size={50} className="text-danger" />
            <p className="text-black text-2xl font-semibold">Vi tilbyr</p>
          </div>
          <p className="text-black md:w-64 text-lg text-center md:text-left">
            Vi gjør hele jobben! Rehabilitering og riving av gammelt gulv,
            levering av nye ferdigbehandlete gulvbelegg, tepper eller linolium.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="flex items-center gap-4">
            <FaInfoCircle size={50} className="text-success" />
            <p className="text-black text-2xl font-semibold">Erfaring</p>
          </div>
          <p className="text-black md:w-64 text-lg text-center md:text-left">
            Solid familiebedrift som har levert kvalitet siden 1996. Selskapet
            driftes av Roald og Jonas Selstad.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="flex items-center gap-4">
            <FaTruck size={50} className="text-info" />
            <p className="text-black text-2xl font-semibold">Nasjonalt</p>
          </div>
          <p className="text-black md:w-64 text-lg text-center md:text-left">
            Vi leverer i hele Norge. Hovedsaklig til bedrifter, kontorlokaler og
            butikker, men også til privatpersoner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
