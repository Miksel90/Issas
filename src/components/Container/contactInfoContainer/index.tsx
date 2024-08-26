// import { IoPhonePortraitSharp } from "react-icons/io5";
// import { IoMailSharp } from "react-icons/io5";
// import { IoPinSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const ContactInfoContainer = () => {
  return (
    <div className="flex flex-col items-center justify-evenly p-4 rounded ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
        <p className="text-xl font-semibold">Følg Oss!</p>
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

{
  /* <div className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold text-center">Kontakt</p>
        <div className="flex flex-row items-center justify-center gap-15 ">
          <a href="tel:+4766963500" className="flex items-center gap-15">
            <IoPhonePortraitSharp size={40} style={{ marginLeft: "5px" }} />
            <p className="text-lg font-semibold hover:text-info hover:underline">
              +47 669 63 500
            </p>
          </a>
        </div>

        <div className="flex flex-row items-center justify-center gap-15 ">
          <a href="mailto:Post@Issas.no" className="flex items-center gap-15">
            <IoMailSharp size={40} />
            <p className="text-lg font-semibold hover:text-info hover:underline">
              Post@Issas.no
            </p>
          </a>
        </div>

        <div className="flex flex-row items-center justify-center gap-15 ">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kveldroveien+1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-15"
          >
            <IoPinSharp size={40} color="red" />
            <p className="text-lg font-semibold hover:text-info hover:underline">
              Kveldroveien 1
            </p>
          </a>
        </div>
      </div> */
}
