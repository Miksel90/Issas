interface HamburgerButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

/**
 * HamburgerButton component that renders a button to toggle a menu.
 *
 * @component
 * @param {HamburgerButtonProps} props - The props for HamburgerButton.
 * @example
 * return (
 *   <HamburgerButton isMenuOpen={isMenuOpen} onClick={handleMenuToggle} />
 * )
 */
const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isMenuOpen,
  onClick,
}) => {
  return (
    <button className="p-2 text-black text-3xl" onClick={onClick}>
      {isMenuOpen ? <span>&#x2715;</span> : <span>☰</span>}
    </button>
  );
};

export default HamburgerButton;
