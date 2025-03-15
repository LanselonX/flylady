interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  children,
  bgColor = "bg-[#281030]",
  textColor = "text-[#FFF6F8]",
  className = "",
  ...rest
}: ButtonProps) => (
  <button
    className={`px-4 py-2 text-base rounded-lg w-auto h-[42px] ${bgColor} ${textColor} ${className}`}
    style={{ backgroundColor: bgColor, color: textColor }}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
