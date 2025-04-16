import React from "react";
import Image from "next/image";
import Logo_menu from "../../../../public/images/logo_menu.svg"

export default function NavBar() {
  return (
    <nav className="menu-container bg-red-700 border-gray-200 dark:bg-red-700 h-24">
      <div className="container flex items-center px-1 h-[100%]">
        <div className="menu-logo-4k relative w-[370px] ml-[4rem] flex align-center">
          <Image 
            src={Logo_menu} 
            alt="logo" 
          />
        </div>
      </div>
    </nav>
  );
}