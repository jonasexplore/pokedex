import { createContext, ReactNode, useState } from "react";
import { DataFetchResponse } from "../interfaces/DataFetch";

interface ModalContextProps {
  isModalActive: Boolean;
  selectedPokemon: DataFetchResponse;
  setShowModal: (pokemon: DataFetchResponse) => void;
  setHideModal: () => void;
}

interface DataProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: DataProviderProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(
    {} as DataFetchResponse
  );

  const setShowModal = (pokemon: DataFetchResponse) => {
    setSelectedPokemon(pokemon);
    setIsModalActive(true);
  };

  const setHideModal = () => {
    setIsModalActive(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalActive,
        selectedPokemon,
        setShowModal,
        setHideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
