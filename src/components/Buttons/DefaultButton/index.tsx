interface DefaultButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "normal" | "large";
  ariaLabel?: string;
  variant?: "default" | "no-hover";
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  onClick,
  className = "",
  size = "normal",
  ariaLabel = "",
  variant = "default",
}) => {
  const baseStyles =
    variant === "default"
      ? " font-primary text-black bg-white rounded-md text-2xl font-semibold hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-300 ease-in-out"
      : " font-primary text-white bg-black rounded-md text-2xl font-semibold hover:text-black hover:bg-white hover:border hover:border-black transition-all duration-300 ease-in-out";

  const sizeStyles =
    size === "large" ? "px-8 py-4 text-xl" : "px-4 py-2 text-base";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
