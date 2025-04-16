import React from "react";
import Image from "next/image";
import Logo_sp from "../../../../public/images/logo_sp.svg"

export const Footer = () => {
  return (
    <footer className="bg-black border-gray-200 dark:bg-black w-full">
      <div className="container mx-auto">
        <div className="footer-logo relative h-[80px] w-[140px] mx-auto">
          <Image
            src={Logo_sp}
            alt="são paulo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}