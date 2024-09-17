import Logo from "../../../assets/Logo/Mestermerket.webp";
import Flag from "react-flagkit";
import ContactInfoContainer from "../../Container/contactInfoContainer";
import { useTranslator } from "../../Translator";

/**
 * Footer component that displays the footer section of the website.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer = () => {
  const { language, toggleLanguage } = useTranslator();
  return (
    <footer className="bg-white font-primary shadow-md w-full bottom-0 p-1 text-black text-md md:text-md mt-1 border-t">
      <div className="bg-white p-4 rounded-sm">
        <div className="flex md:flex-row flex-col-reverse md:gap-8 justify-evenly items-center px-8">
          <img
            src={Logo}
            alt="MastersBadge"
            style={{ width: "100px", height: "100px" }}
          />
          <div className="px-2 py-2">
            <ContactInfoContainer />
          </div>
        </div>
        <div className=" flex justify-between px-8 mt-4">
          <p className="text-sm">
            <p className="text-sm font-primary">
              ISSAS | Din Profesjonelle Gulvlegger
            </p>
          </p>
          <button
            className="btn btn-white mt-1 bg-whi"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            {language === "en" ? (
              <Flag country="NO" size={40} />
            ) : (
              <Flag country="GB" size={40} />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
