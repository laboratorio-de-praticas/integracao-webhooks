import mockData from "../../mocks/ApiCards.json";
import { ApiTableItem } from "./ApiTableitem";

export const ApiTable = () => {
    const data = mockData.data;

    return (
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
                {data.map((api, index) => (
                    <ApiTableItem
                        key={api.id}
                        id={api.id}
                        nome={api.nome}
                        desc={api.desc}
                        caminho={api.caminho}
                        bgColor={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                        fontColor={index % 2 === 0 ? 'text-gray-600' : 'text-gray-500'}
                    />
                ))}
            </tbody>
        </table>
    )
}