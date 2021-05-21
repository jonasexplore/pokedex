import { createContext, ReactNode, useEffect, useState } from "react";
import { DataFetchResponse } from "../interfaces/DataFetch";
import { Pokemon } from "../interfaces/Pokemon";

interface DataContextInterface {
  filteredPokemons: DataFetchResponse[];
  filteredByCategory: DataFetchResponse[];
  filteredByFavorited: DataFetchResponse[];
  countFavorited: number;
  selectedCategory: String;
  getFilterFavorited: () => DataFetchResponse[];
  setFavoritedPokemon: (id: number) => void;
  selectCategory: (name: string) => void;
  setFilterPokemons: (name: string) => void;
  getCategories: () => String[];
}

interface DataProviderInterface {
  children: ReactNode;
}

export const DataContext = createContext({} as DataContextInterface);

export const DataProvider = ({ children }: DataProviderInterface) => {
  const [pokemons, setPokemons] = useState([] as DataFetchResponse[]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [filteredPokemons, setFilteredPokemons] = useState(
    [] as DataFetchResponse[]
  );
  const [filteredByCategory, setFilteredByCatergory] = useState(
    [] as DataFetchResponse[]
  );
  const [filteredByFavorited, setFilteredByFavorited] = useState(
    [] as DataFetchResponse[]
  );

  const setFilterPokemons = (name: string) => {
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const getFilterFavorited = (): DataFetchResponse[] => {
    const filtered = pokemons.filter((item) => item.isFavorite === true);
    return filtered;
  };

  const countFavorited = getFilterFavorited().length;

  const setFavoritedPokemon = (id: number) => {
    const foundPokemonIndex = pokemons.findIndex(
      (pokemon) => pokemon.id === id
    );
    let changePokemon = pokemons;

    const isFavorited = changePokemon[foundPokemonIndex].isFavorite;
    changePokemon[foundPokemonIndex].isFavorite = !isFavorited;

    setFilteredByFavorited(getFilterFavorited());
  };

  const selectCategory = (name: string) => {
    setSelectedCategory(name);

    name === "Todos"
      ? setFilteredByCatergory(pokemons)
      : setFilteredByCatergory(
          pokemons.filter((pokemon) =>
            pokemon.types.find((item) => item.type.name == name && pokemon)
          )
        );
  };

  const getCategories = (): String[] => {
    let categoryList: String[] = [];
    pokemons.forEach((pokemon) => {
      pokemon.types.forEach((item) => {
        categoryList.push(item.type.name);
      });
    });
    return categoryList;
  };

  useEffect(() => {
    const getData = async () => {
      const response: { results: Pokemon[] } = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50&offset=20"
      ).then((data) => data.json());

      let newPokemon: DataFetchResponse[] = [];

      response.results.map(async (item) => {
        const res = await fetch(item.url).then((data) => data.json());
        newPokemon.push({ ...res, isFavorite: false });
      });

      setFilteredPokemons(newPokemon);
      setPokemons(newPokemon);
    };
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        filteredPokemons,
        filteredByCategory,
        filteredByFavorited,
        selectedCategory,
        countFavorited,
        getFilterFavorited,
        setFavoritedPokemon,
        selectCategory,
        setFilterPokemons,
        getCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
