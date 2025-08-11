import { FiArrowRight } from "react-icons/fi";


const SecondaryButton = ({ children, className = "" }) => {
  return (
    <button
      className={`text-[#4CAF4F] text-sm flex items-center gap-1  hover:bg-[#2F6F2F] cursor-pointer ${className}`}
      style={{ background: "none", border: "none", padding: 0 }}
    >
      {children}
      <FiArrowRight className="w-4 h-4" />
    </button>
  );
};

export default SecondaryButton;

