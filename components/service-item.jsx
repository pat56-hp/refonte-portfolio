import React from "react";

export default function ServiceItem({ title, description, icon }) {
  return (
    <div className="grid py-8 px-6 gap-y-4 bg-secondary rounded-lg border border-primary transition-transition duration-500 hover:scale-101 hover:shadow-md hover:shadow-secondary">
      <i className={`${icon} text-6xl`}></i>
      <h3 className="text-md font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
