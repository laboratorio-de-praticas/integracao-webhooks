"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function ApiDetails({ params }) {
    const [id, setId] = useState(null)

    useEffect(() => {
        async function resolveParams() {
            const { id: resolvedId } = await params;
            setId(resolvedId);
        }
        resolveParams()
    }, [params])

    return (
        <div className="min-h-screen flex flex-col font-verdana">
            <Header />
            <NavBar />
            <main className="flex-1 flex justify-center bg-white">
                <section className="flex flex-col items-center w-full max-w-4/5 pb-30">
                    <div className="text-black h-1/5 mt-20 w-full">
                        <h1 className="text-[#1A6C7C] text-4xl font-medium mb-3">Manipulação de Enpoints</h1>
                        <hr className="border-gray-400" />
                        <p className="mt-10 text-gray-500">Selecione o endpoint que deseja alterar:</p>
                    </div>
                    <div className="text-gray-500 mt-10 w-full flex items-center">
                        <p className="px-2 font-semibold text-gray-500">API:</p>
                        <select className="w-5/5 px-3 py-4 bg-gray-100 outline-none cursor-pointer">
                            <option value="1">api/usuarios/login</option>
                            <option value="2">Opção 2</option>
                            <option value="3">Opção 3</option>
                        </select>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
