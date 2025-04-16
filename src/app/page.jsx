import React from "react";
import Header from "../app/components/Header/Header";
import Footer from "../app/components/Footer/Footer";
import NavBar from "../app/components/NavBar/NavBar";
import { ApiCard } from "./components/ApiCard/ApiCard";


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
          <table className="table-auto w-4/5 border-collapse border border-gray-400 rounded-md">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="px-4 py-2 text-left">Nome</th>
                <th className="px-4 py-2 text-left">Descrição</th>
                <th className="px-4 py-2 text-left">Caminho</th>
                <th className="px-4 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
            <ApiCard
              nome="API1"
              desc="Login dos Usuários"
              caminho="api/usuarios/login"
            />
            </tbody>
          </table>

        </section>
      </main>
      <Footer />
    </div>
  );
}