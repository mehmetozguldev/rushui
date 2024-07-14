import React from "react";
import Logo from "../brand/Logo";

export const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto container py-12 grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col items-start gap-3">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
