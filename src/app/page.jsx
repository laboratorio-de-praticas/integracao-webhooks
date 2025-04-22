"use client";
import React from "react";
import { ApiTable } from "./components/ApiTable/ApiTable";

export default function Home() {

  return (
    <div className="h-full w-full flex flex-col gap-12 pb-30">
      <div className="text-black h-1/5 mt-20 w-full">
        <h1 className="text-[#1A6C7C] text-4xl font-medium mb-3">Seleção de APIs</h1>
        <hr className="border-gray-400" />
        <p className="mt-10 text-gray-500">Selecione a API:</p>
      </div>
      <div className="w-full max-h-[420px] overflow-y-auto border border-gray-400 rounded-md shadow-all-sides">
        <ApiTable />
      </div>
      </div>
  );
}
