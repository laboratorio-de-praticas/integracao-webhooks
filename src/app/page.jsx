"use client";
import React, { useState } from "react";
import Header from "../app/components/Header/Header";
import Footer from "../app/components/Footer/Footer";
import NavBar from "../app/components/NavBar/NavBar";
import { ApiCard } from "./components/ApiCard/ApiCard";
import mockData from "./mocks/ApiCards.json";

export default function Home() {
  const [Apis, setApis] = useState(mockData.data);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavBar />
      <main className="flex-1 flex justify-center bg-white">
        <section className="flex flex-col items-center w-full max-w-4/5 pb-20">
          <div className="text-black h-1/5 mt-20 w-full">
            <h1 className="text-[#1A6C7C] text-4xl font-medium">Seleção de APIs</h1>
            <hr />
            <p className="mt-10">Selecione a API:</p>
          </div>
          <div className="w-full max-h-[400px] overflow-y-auto border border-gray-400 rounded-md">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-white text-black">
                  <th className="px-10 py-2 text-left">Nome</th>
                  <th className="px-10 py-2 text-left">Descrição</th>
                  <th className="px-10 py-2 text-left">Caminho</th>
                  <th className="px-10 py-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {Apis.map((api, index) => (
                  <ApiCard
                    key={api.id}
                    nome={api.nome}
                    desc={api.desc}
                    caminho={api.caminho}
                    bgColor= {index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
