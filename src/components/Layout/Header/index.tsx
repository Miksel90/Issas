import { Link } from "react-router-dom";
import HeaderNavigation from "../../Navigation/Header";
import logo from "../../../assets/Logo/Logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0  w-full bg-white shadow-lg ">
      <div className=" px-4 md:px-8 flex flex-row justify-between items-center">
        <Link to="/" className="flex flex-row justify-center items-center">
          <img
            src={logo}
            alt="The logo of Issas"
            style={{ width: "140px", height: "140px" }}
          />
        </Link>
        <div className="flex flex-row justify-end ">
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
};
export default Header;
