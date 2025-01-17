// ----------Icons---------
import { Eraser, TrashSimple } from "phosphor-react";

// ----------Context---------
import { ClientType } from "../../contexts/clientsContext";

// ----------Hooks---------
import { useClients } from "../../hooks/useClients";

interface tableProps {
  clients: ClientType[];
  changeIsActive: () => void;
  getClient: (client: ClientType) => void;
  currentPage: number;
};

export function Table({
  clients,
  changeIsActive,
  getClient,
  currentPage,
}: tableProps) {
  const { deleteClient } = useClients();
  return (
    <>
      <table className="table-auto border-collapse border-2 border-gray-200 bg-white w-[1000px]">
        <thead>
          <tr>
            <th className="border-2 border-gray-200 w-20"> </th>
            <th className="border-2 border-gray-200 p-2">Nome</th>
            <th className="border-2 border-gray-200 p-2">Empresa</th>
            <th className="border-2 border-gray-200 p-2">Telefone</th>
            <th className="border-2 border-gray-200 p-2">E-mail</th>
            <th className="border-2 border-gray-200 p-2">Status</th>
          </tr>
        </thead>
        {/* Using the slice method it takes only 6 clients per page and show using map */}
        {clients
          .slice((currentPage - 1) * 6, currentPage * 6)
          .map((client: ClientType) => {
            return (
              <tbody key={client.id}>
                <tr>
                  <td className="text-lg gap-2 border-2 border-gray-200 p-2 text-center ">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          changeIsActive();
                          getClient(client);
                        }}
                        className="hover:text-xl"
                      >
                        <Eraser />
                      </button>
                      <button
                        onClick={() => {
                          deleteClient(client.id);
                        }}
                        className="hover:text-xl"
                      >
                        <TrashSimple />
                      </button>
                    </div>
                  </td>
                  <td className="border-2 border-gray-200 p-2 text-center">
                    {client.name}
                  </td>
                  <td className="border-2 border-gray-200 p-2 text-center">
                    {client.company}
                  </td>
                  <td className="border-2 border-gray-200 p-2 text-center">
                    {client.phone}
                  </td>
                  <td className="border-2 border-gray-200 p-2 text-center">
                    {client.email}
                  </td>
                  <td className="border-2 border-gray-200 p-2 text-center">
                    {client.isActive ? "Ativo" : "Desligado"}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
}
