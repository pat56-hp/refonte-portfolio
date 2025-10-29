import React from "react";

export default function Input({
  type = "text",
  id = "",
  placeholder = "",
  className = "",
  name,
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`bg-secondary-foreground border border-primary rounded-sm px-4 py-3 placeholder:text-mute focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
