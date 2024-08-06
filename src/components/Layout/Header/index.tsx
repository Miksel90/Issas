import { Link } from "react-router-dom";
import HeaderNavigation from "../../Navigation/Header";

const Header = () => {
  return (
    <header>
      <Link to="/" className="flex md:flex-col justify-center items-center">
        <span className="">ISSAS</span>
      </Link>
      <div className="">
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
