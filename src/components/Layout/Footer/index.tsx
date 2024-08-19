import Logo from "../../../assets/Logo/Mestermerket.webp";
import Flag from "react-flagkit";

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
  return (
    <footer className="bg-white font-sans shadow-md w-full bottom-0 p-1 text-black text-md md:text-md mt-1 border-t">
      <div className="bg-white p-4 rounded-sm">
        <div className="flex md:flex-row flex-col-reverse md:gap-8 justify-between items-center px-8">
          <img
            src={Logo}
            alt="MastersBadge"
            style={{ width: "100px", height: "100px" }}
          />
          <div className="px-2 py-2">
            <p>
              Etablert i 1996, med fokus på gulvlegging har ISSAS vokst
              betydelig, og har med tiden formet seg til å bli en av landets
              fremste spesialister på gulv til butikker, kontorbygg og
              næringslokaler. ISSAS er en familiestyrt gulvleggerbedrift med
              stor tyngde innenfor vårt fagfelt. Vi tilbyr kun de beste typer av
              gulv og tepper, samt leverer de mest profesjonelle gulvleggere.
            </p>
          </div>
        </div>
        <div className=" flex justify-between px-8 mt-4">
          <p className="text-sm">ISSAS | Din Profesjonelle Gulvlegger</p>
          <Flag country="NO" size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
