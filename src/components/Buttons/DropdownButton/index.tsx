import { useState } from "react";

interface DropdownItemProps {
  title: string;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-2xl hover:font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && <div className="mt-2 text-base ">{children}</div>}
    </div>
  );
};

export default DropdownItem;
