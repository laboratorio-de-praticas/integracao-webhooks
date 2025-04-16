"use client";
import React from "react";
import Image from "next/image";
import Logo_sp from "../../../../public/images/logo_sp.svg"

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between bg-white pb-2.5 h-23">
        <div className="flex items-center bg-black rounded-r-[100px] pl-10.5">
          <div className="header-container-4k relative w-[258px]">
            <Image
              src={Logo_sp}
              alt="São Paulo" 
              height={32}
            />
          </div>
        </div>
      </div>
    </header> 
  );
}