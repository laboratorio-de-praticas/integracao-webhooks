import React from "react";
import Image from "next/image";
import Logo_menu from "../../../../public/images/logo_menu.svg"

export default function NavBar() {
  return (
      <div className="bg-red-700 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src={Logo_menu}
            alt="CPS"
            width={320}
            height={40}
            className="object-contain"
          />
        </div>
        <button className="bg-gray-300 text-black p-3 rounded-full">
          Perfil
        </button>
      </div>
  );
}