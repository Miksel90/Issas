import { Link } from "react-router-dom";
import HeaderNavigation from "../../Navigation/Header";
import logo from "../../../assets/Logo/logo2.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-99 w-full bg-white shadow-lg h-18 ">
      <div className=" px-4 md:px-8 flex flex-row justify-between items-center">
        <Link to="/" className="flex flex-row justify-center items-center">
          <img
            src={logo}
            alt="The logo of Issas"
            style={{ width: "150px", height: "100px" }}
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
