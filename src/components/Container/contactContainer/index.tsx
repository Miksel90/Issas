import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import MasterImage from "../../../assets/Images/mesterMerkeBlack.png";

const ContactContainer = () => {
  return (
    <div className="w-full hidden md:flex bg-black p-2 space-x-8 justify-evenly">
      <div className="flex items-center text-white text-xl">
        <IoMailSharp size={24} className="text-white mr-2" />
        <span>Post@issas.no</span>
      </div>
      <div className="flex items-center text-white text-xl">
        <img src={MasterImage} alt="Mestermerket" className="w-18 h-16" />
      </div>
      <div className="flex items-center text-white text-xl">
        <IoPhonePortraitSharp size={24} className="text-white mr-2" />
        <span>+47 669 63 500</span>
      </div>
    </div>
  );
};

export default ContactContainer;
