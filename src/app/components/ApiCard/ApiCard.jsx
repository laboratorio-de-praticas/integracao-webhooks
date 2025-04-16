import React from "react";

export const ApiCard = (props) => {
    return (
      <tr className= {`${props.bgColor} h-15 text-gray-600`}>
        <td className="px-10 py-0.5">{props.nome}</td>
        <td className="px-10 py-0.5">{props.desc}</td>
        <td className="px-10 py-0.5">{props.caminho}</td>
        <td className="py-0.5">
          <button className="bg-white text-[#B20000] border-2 border-[#B20000] px-8 py-1 rounded-xl font-semibold">
            Visualizar Endpoints
          </button>
        </td>
      </tr>
    );
  };
  
  