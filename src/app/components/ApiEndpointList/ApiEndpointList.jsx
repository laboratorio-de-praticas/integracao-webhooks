import React, { useState } from "react";
import { ApiEndpointListItem } from "./ApiEndpointListItem";
import apiInfo from "../../mocks/ApiInfo.json";

export const ApiEndpointList = () => {
    const [data, setData] = useState(apiInfo.data)
    return (
        <>
            <p className="mt-10 text-gray-500 self-start">Endpoints Atuais: </p>
            <div className="w-full max-h-[300px] overflow-y-auto rounded-md mt-8 gap-2.5 flex flex-col">
                {data.map((apiItem) => (
                    apiItem.endpoints.map((endpoint, index) => (
                        <ApiEndpointListItem
                            key={index}
                            method={endpoint.method}
                            path={endpoint.path}
                            desc={endpoint.desc}
                        />
                    ))
                ))}
            </div>
        </>
    )
}