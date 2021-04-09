import { createContext, ReactNode, useEffect, useState } from "react";

interface DataContextInterface {
  pokemons: Pokemon[];
  filterPokemons: (name: string) => void;
}

interface Pokemon {
  name: string;
  url: string;
}

interface DataProviderInterface {
  children: ReactNode;
}

export const dataContext = createContext({} as DataContextInterface);

export const DataProvider = ({ children }: DataProviderInterface) => {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);

  const filterPokemons = (name: string) => {
    const data = pokemons;
    const filter = new RegExp(name, "g");
    const filtered = data.filter(
      (pokemon) => (pokemon.name.match(filter) || name.length == 0) && pokemon
    );
    setPokemons(filtered);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      ).then((data) => data.json());

      setPokemons(res.results);
    };

    getData();
  }, []);

  return (
    <dataContext.Provider value={{ pokemons, filterPokemons }}>
      {children}
    </dataContext.Provider>
  );
};
