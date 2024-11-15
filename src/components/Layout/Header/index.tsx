import { Link } from "react-router-dom";
import HeaderNavigation from "../../Navigation/Header";
import logo from "../../../assets/Logo/logo2.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md h-20">
      <div className="mt-4 px-4 md:px-8 flex flex-row justify-between items-center">
        <Link to="/" className="flex flex-row justify-center items-center">
          <img
            src={logo}
            alt="The logo of Issas"
            style={{ width: "200px", height: "80px" }}
          />
        </Link>
        <div className="flex flex-row justify-end">
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
