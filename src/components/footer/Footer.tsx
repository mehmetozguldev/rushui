import React from "react";
import Logo from "../brand/Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto container py-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-3">
          <Logo />
          <Link href="https://github.com/mehmetozguldev/rushui">
            Give us a star on GitHub
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
