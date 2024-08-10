import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerButton from "../../Buttons/Hamburger";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();

  /**
   * Toggles the main menu open or closed.
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * Toggles the dropdown menu open or closed.
   */
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  /**
   * Handles clicks outside the menu and dropdown to close them.
   *
   * @param {MouseEvent} event - The event object.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
    // Close menu and dropdown on route change
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const isActivePage = (path: string): string =>
    location.pathname === path
      ? "underline font-bold"
      : "hover:underline hover:font-bold";

  return (
    <nav className="bg-primary font-condensed w-full relative">
      <div className="lg:hidden">
        <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <ul
        ref={menuRef}
        className={`lg:flex lg:flex-row lg:static lg:w-auto lg:p-0 lg:shadow-none lg:bg-transparent bg-white md:rounded-md
          ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full right-0 xxs:-ml-14 md:ml-0 bg-primary transition-all duration-500 ease-in-out shadow-md text-xl text-black p-4`}
      >
        <li className="py-2 px-5">
          <Link to="/" className={isActivePage("/")}>
            Home
          </Link>
        </li>
        <li className="py-2 px-5">
          <Link to="/services" className={isActivePage("/services")}>
            Services
          </Link>
        </li>
        <li className="py-2 px-5">
          <Link to="/projects" className={isActivePage("/projects")}>
            Projects
          </Link>
        </li>
        <li className="py-2 px-5">
          <Link to="/about" className={isActivePage("/about")}>
            About
          </Link>
        </li>
        <li className="relative py-2 px-5">
          <button
            className={` flex flex-row items-center gap-1 w-full text-left ${isActivePage(
              "/contact"
            )}`}
            onClick={toggleDropdown}
          >
            Contact
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
            <li className="py-2 px-4 hover:underline hover:font-bold">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="py-2 px-4 hover:underline hover:font-bold">
              <Link to="/contactPeople">Management</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
