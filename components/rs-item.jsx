export default function RsItem({
  href = "#",
  icon,
  classParent = "",
  classIconParent = "",
  children,
}) {
  const isString = typeof icon === "string";

  return (
    <a
      href={href}
      target="_blank"
      className={`${classParent} flex items-center gap-2`}
    >
      <div
        className={`bg-secondary text-xs w-8 h-8 flex items-center justify-center rounded-full leading-none hover:border-primary hover:border hover:text-foreground transition-colors duration-150 ${classIconParent}`}
        {...(isString ? { dangerouslySetInnerHTML: { __html: icon } } : {})}
      >
        {!isString && icon}
      </div>
      {children}
    </a>
  );
}
