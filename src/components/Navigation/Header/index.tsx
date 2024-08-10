import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerButton from "../../Buttons/Hamburger";

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();

  /**
   * Toggles the menu open or closed.
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Handles clicks outside the menu to close it.
   *
   * @param {MouseEvent} event - The event object.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActivePage = (path: string): string =>
    location.pathname === path
      ? "underline"
      : "hover:underline hover:font-bold";

  return (
    <nav className="bg-primary font-condensed w-full relative" ref={menuRef}>
      <div className="lg:hidden">
        <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <ul
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
        <li className="relative py-2 px-5 group">
          <Link to="/contact" className={isActivePage("/contact")}>
            Contact
          </Link>
          <ul className="absolute right-0 top-full mt-2 bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
