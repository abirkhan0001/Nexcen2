const Button = ({ children, className = "" }) => {
  return (
    <button 
      className={`bg-[#4CAF4F] text-white hover:bg-[#2F6F2F] text-sm rounded-[3px] w-[133px] h-[37px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
