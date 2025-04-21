import React from "react";
import Image from "next/image";
import Logo_menu from "../../../../public/images/logo_menu.svg"

export const NavBar = () => {
  return (
      <div className="bg-red-700 text-white min-h-23 px-6 mt-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src={Logo_menu}
            alt="CPS"
            width={400}
            height="auto"
            className="object-contain"
          />
        </div>
        <button className="bg-white text-black p-7 mr-30 rounded-full">
        </button>
      </div>
  );
}