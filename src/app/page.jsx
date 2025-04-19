"use client";
import React from "react";
import { Header } from "../app/components/Header/Header";
import { Footer } from "../app/components/Footer/Footer";
import { NavBar } from "../app/components/NavBar/NavBar";
import { ApiTable } from "./components/ApiTable/ApiTable";

export default function Home() {

  return (
    <div className="h-auto flex flex-col font-verdana">
      <main className="h-auto flex justify-center bg-white">
        <section className="flex flex-col items-center w-full h-full max-w-4/5">
          <div className="text-black h-1/5 mt-20 w-full">
            <h1 className="text-[#1A6C7C] text-4xl font-medium mb-3">Seleção de APIs</h1>
            <hr className="border-gray-400"/>
            <p className="mt-10 text-gray-500">Selecione a API:</p>
          </div>
          <div className="w-full max-h-[400px] overflow-y-auto border border-gray-400 rounded-md mt-8 shadow-all-sides mb-30">
            <ApiTable />
          </div>
        </section>
      </main>
    </div>
  );
}
