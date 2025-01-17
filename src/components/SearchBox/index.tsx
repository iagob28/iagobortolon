// ----------React---------
import { useState } from "react";

// ----------Hooks---------
import { useClients } from "../../hooks/useClients";

interface SearchBoxProps {
  onIsActiveChange: () => void;
}

export function SearchBox({ onIsActiveChange }: SearchBoxProps) {
  const { searchClient } = useClients();
  
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          searchClient(searchValue);
        }}
        className="flex gap-4 w-[1000px]"
      >
        <input
          type="text"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Pesquisar por nome, empresa , telefone, email ou status"
          className="w-[650px] h-12 rounded-lg border-gray-300 border-2 text-center"
        />
        <button
          type="submit"
          className="h-12 bg-red-600 text-white p-2 rounded-lg font-semibold hover:bg-red-800 active:border-red-600 active:border-2"
        >
          Procurar
        </button>
        <button
          onClick={onIsActiveChange}
          className="h-12 bg-gray-500 text-white p-2 rounded-lg font-semibold hover:bg-gray-800 active:border-gray-600 active:border-2"
        >
          Novo Cliente
        </button>
      </form>
    </>
  );
}
