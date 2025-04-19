import React from "react";
import { useRouter } from "next/navigation";

export const ApiTableItem = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/api/${props.id}`);
  };
  
    return (
      <tr className= {`${props.bgColor} h-15 ${props.fontColor} font-verdana`}>
        <td className="px-10 py-0.5">{props.nome}</td>
        <td className="px-10 py-0.5">{props.desc}</td>
        <td className="px-10 py-0.5">{props.caminho}</td>
        <td className="py-0.5">
          <button 
          onClick={handleClick}
          className="bg-white text-[#B20000] border-2 border-[#B20000] px-8 py-1 rounded-xl font-semibold cursor-pointer hover:bg-[#B20000] hover:text-white">
            Visualizar Endpoints
          </button>
        </td>
      </tr>
    );
  };
  
  