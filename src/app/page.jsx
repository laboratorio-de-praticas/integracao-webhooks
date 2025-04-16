import React from "react";
import Header from "../app/components/Header/Header";
import Footer from "../app/components/Footer/Footer";
import NavBar from "../app/components/NavBar/NavBar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavBar />
      <main className="flex-1 flex justify-center bg-white">
        <section className="flex-1 flex items-center flex-col">
          <div className="w-4/5 text-black h-1/5 mt-20">
            <h1 className="text-[#1A6C7C] text-4xl font-medium">Seleção de APIs</h1>
            <hr></hr>
            <p className="mt-10">Selecione a API:</p>
          </div>
          <div className="w-4/5 text-black h-25/50 border-gray-400 border-2 rounded-md">
            <div className="flex gap-[15%] px-8 py-3">
              <p>Nome</p>
              <p>Descrição</p>
              <p>Caminho</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}