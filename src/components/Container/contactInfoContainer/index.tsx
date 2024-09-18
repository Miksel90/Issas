import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useTranslator } from "../../Translator/useTranslator";

const ContactInfoContainer = () => {
  const { translate } = useTranslator();

  return (
    <div className="flex flex-col items-center justify-evenly p-4 rounded ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
        <p className="text-xl font-semibold">{translate("Følg Oss!")}</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href="https://www.linkedin.com/company/issas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} color="blue" />
          </a>
          <a
            href="https://www.linkedin.com/company/issas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-lg font-semibold hover:text-info hover:underline">
              ISSAS GULV
            </p>
          </a>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href="https://www.facebook.com/ISSAS.GULV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} color="blue" />
          </a>
          <a
            href="https://www.facebook.com/ISSAS.GULV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-lg font-semibold hover:text-info hover:underline">
              ISSAS GULV
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoContainer;
