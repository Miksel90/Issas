const DefaultButton = ({
  children,
  onClick,
  className = "",
  size = "normal",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "normal" | "large";
}) => {
  const baseStyles = "text-black bg-primary rounded-md text-2xl font-semibold";
  const sizeStyles =
    size === "large" ? "px-8 py-4 text-xl" : "px-4 py-2 text-base";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
