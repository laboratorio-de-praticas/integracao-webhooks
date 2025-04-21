"use client";
import React, { useState, useEffect } from "react";
import { ApiEndpointList } from "@/app/components/ApiEndpointList/ApiEndpointList";

export default function ApiDetails({ params }) {
    const [id, setId] = useState(null)

    useEffect(() => {
        async function resolveParams() {
            const { id: resolvedId } = await params;
            setId(resolvedId);
        }
        resolveParams()
    }, [params])

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="h-full flex flex-col">
            <div className="h-auto min-h-[110vh] flex justify-center bg-white pb-30">
                <section className="flex flex-col items-center w-full">
                    <div className="text-black h-40 mt-20 w-full">
                        <h1 className="text-[#1A6C7C] text-4xl font-medium mb-3">Manipulação de Enpoints</h1>
                        <hr className="border-gray-400" />
                        <p className="mt-10 text-gray-500">Selecione o endpoint que deseja alterar:</p>
                    </div>
                    <div className="text-gray-500 w-full flex items-center">
                        <p className="px-2 font-semibold text-gray-500">API:</p>
                        <select className="w-5/5 px-3 py-4 bg-gray-100 outline-none cursor-pointer rounded-lg">
                            <option value="1">api/usuarios/login</option>
                            <option value="2">Opção 2</option>
                            <option value="3">Opção 3</option>
                        </select>
                    </div>
                    <ApiEndpointList />
                    <p className="mt-17 text-gray-500 self-start">Adicionar endpoint: </p>
                    <div className="text-black h-20 mt-8 w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center w-full">
                                <p className="font-semibold text-gray-500">Tipo:</p>
                                <select className="text-gray-600 ml-15 px-3 py-4 bg-gray-100 outline-none cursor-pointer w-40 rounded-lg">
                                    <option value="1">DELETE</option>
                                    <option value="2">GET</option>
                                    <option value="3">POST</option>
                                    <option value="3">PUT</option>
                                </select>
                                <p className="ml-10 font-semibold text-gray-500">Caminho:</p>
                                <input type="text" placeholder="api/auth/authenticationmodule" className="ml-10 px-3 py-4 w-4/5 bg-gray-100 text-gray-600 outline-none rounded-lg" />
                            </div>
                            <div className="flex items-center w-full mt-7">
                                <p className="font-semibold text-gray-500">Descrição:</p>
                                <input type="text" placeholder="Módulo de autenticação de usuários" className="ml-4 px-3 py-4 bg-gray-100 text-gray-500 w-4/5 outline-none rounded-lg" />
                                <button type="submit" className="px-15 py-4 bg-[#B20000] ml-10 cursor-pointer text-white font-semibold rounded-lg hover:bg-[#640000]">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
