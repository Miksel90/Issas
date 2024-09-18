import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerButton from "../../Buttons/Hamburger";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslator } from "../../Translator";

const HeaderNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLUListElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const location = useLocation();

  const { translate } = useTranslator();

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest("button")
    ) {
      setIsMenuOpen(false);
    }
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const isActivePage = (path: string): string =>
    location.pathname === path ? "underline " : "";

  return (
    <nav className="bg-primary font-condensed w-full relative">
      <div className="lg:hidden relative z-50">
        <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <ul
        ref={menuRef}
        className={`lg:flex lg:flex-row lg:static lg:w-auto lg:p-0 lg:shadow-none lg:bg-transparent bg-white md:rounded-md 
          ${isMenuOpen ? "block" : "hidden"}
          absolute top-full right-0 xxs:-ml-14 md:ml-0 bg-primary transition-all duration-500 ease-in-out shadow-md font-secondary text-xl text-black p-4 z-50`}
      >
        <li className="py-2 px-5">
          <Link to="/" className={isActivePage("/")}>
            {translate("Hjem")}
          </Link>
        </li>
        <li className="py-2 px-5">
          <Link to="/services" className={isActivePage("/services")}>
            {translate("Tjenester")}
          </Link>
        </li>
        <li className="py-2 px-5">
          <Link to="/projects" className={isActivePage("/projects")}>
            {translate("Prosjekter")}
          </Link>
        </li>
        <li className="py-2 px-5">
          <Link to="/about" className={isActivePage("/about")}>
            {translate("Om Oss")}
          </Link>
        </li>
        <li className="relative py-2 px-5">
          <button
            className={`flex flex-row items-center gap-1 w-full text-left ${isActivePage(
              "/contact"
            )}`}
            onClick={toggleDropdown}
          >
            {translate("Kontakt")}
            <IoMdArrowDropdown />
          </button>
          <ul
            ref={dropdownRef}
            className={`absolute right-0 top-full mt-2 bg-white text-black shadow-md rounded-md transition-opacity duration-300 ${
              isDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <li className="py-2 px-4">
              <Link to="/contact">{translate("Kontakt Oss")}</Link>
            </li>
            <li className="py-2 px-4">
              <Link to="/contactPeople">{translate("Kontaktpersoner")}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
