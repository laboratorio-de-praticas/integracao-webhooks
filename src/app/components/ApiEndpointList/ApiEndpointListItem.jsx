import React from "react";
import Image from "next/image";
import ic_edit from "../../../../public/images/ic_edit.svg";
import ic_delete from "../../../../public/images/ic_delete.svg";

export const ApiEndpointListItem = (props) => {
    const cardColor = props.method.toUpperCase() === "GET" ? "bg-[#D2E2FF] border-[#5795FF]" :
        props.method.toUpperCase() === "POST" ? "bg-[#BFFFE9] border-[#26C88F]" :
            props.method.toUpperCase() === "PUT" ? "bg-[#FFE6C5] border-[#F4A946]" : "bg-[#FFD6D6] border-[#FF5252]";

    const methodCardColor = props.method.toUpperCase() === "GET" ? "bg-[#5795FF]" :
        props.method.toUpperCase() === "POST" ? "bg-[#26C88F]" :
            props.method.toUpperCase() === "PUT" ? "bg-[#F4A946]" : "bg-[#FF5252]";

    const filterStyle = props.method.toUpperCase() === "GET" ? "invert(54%) sepia(73%) saturate(3520%) hue-rotate(210deg)" :
        props.method.toUpperCase() === "POST" ? "invert(74%) sepia(24%) saturate(1496%) hue-rotate(136deg)" :
            props.method.toUpperCase() === "PUT" ? "invert(76%) sepia(67%) saturate(1443%) hue-rotate(25deg)" :
                "invert(41%) sepia(79%) saturate(3987%) hue-rotate(336deg)";

    return (
        <div className={`${cardColor} border flex items-center p-1 rounded-lg text-black justify-between`}>
            <div className="flex items-center">
                <div className={`${methodCardColor} w-30 flex justify-center items-center py-3 rounded-lg text-white font-bold`}>
                    <p>{props.method.toUpperCase()}</p>
                </div>
                <p className="pl-7 text-[#696969]">{props.path}</p>
                <p className="pl-9 text-[#A0A0A0]">{props.desc}</p>
            </div>
            <div className="flex items-center space-x-10 pr-7">
                <Image
                    src={ic_edit}
                    alt="Editar"
                    style={{ filter: filterStyle, cursor:"pointer"}}
                />
                <Image
                    src={ic_delete}
                    alt="Deletar"
                    style={{ filter: filterStyle, cursor:"pointer"}}
                />
            </div>
        </div>
    );
};
