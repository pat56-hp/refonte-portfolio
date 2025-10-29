export default function Button({
  bgColor = "bg-secondary",
  borderColor = "border-primary",
  rounded = "rounded-md",
  className = null,
  children,
  ...props
}) {
  return (
    <button
      className={`leading-none hover:bg-primary hover:cursor-pointer border py-3 px-5 transition-all duration-150 ${bgColor}  ${borderColor} ${rounded} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
