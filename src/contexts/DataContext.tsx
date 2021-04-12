import { createContext, ReactNode, useEffect, useState } from "react";
import { DataFetchResponse } from "../interfaces/DataFetch";
import { Pokemon } from "../interfaces/Pokemon";

interface DataContextInterface {
  filteredPokemons: DataFetchResponse[];
  setFilterPokemons: (name: string) => void;
}

interface DataProviderInterface {
  children: ReactNode;
}

export const DataContext = createContext({} as DataContextInterface);

export const DataProvider = ({ children }: DataProviderInterface) => {
  const [pokemons, setPokemons] = useState([] as DataFetchResponse[]);
  const [searchField, setSearchField] = useState("");

  const setFilterPokemons = (name: string) => {
    setSearchField(name);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    const getData = async () => {
      const response: { results: Pokemon[] } = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      ).then((data) => data.json());

      let newPokemon: DataFetchResponse[] = [];
      response.results.map(async (item) => {
        const res = await fetch(item.url).then((data) => data.json());
        newPokemon.push(res);
      });
      setPokemons(newPokemon);
    };
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        filteredPokemons,
        setFilterPokemons,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
