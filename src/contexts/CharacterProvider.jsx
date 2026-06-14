import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextCharacters = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime(
      "Characters",
      (charactersList) => {
        setCharacters(charactersList);
      },
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextCharacters.Provider value={characters}>
        {children}
      </ContextCharacters.Provider>
    </div>
  );
};

export default CharacterProvider;
