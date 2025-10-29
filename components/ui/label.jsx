import React from "react";

export default function Label({ label, htmlFor, required = false, ...props }) {
  return (
    <label htmlFor={htmlFor} {...props}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
}
