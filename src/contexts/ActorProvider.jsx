import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextActors = createContext();

export const ActorProvider = ({ children }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime(
      "Actors",
      (actorsList) => {
        setActors(actorsList);
      },
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextActors.Provider value={actors}>
        {children}
      </ContextActors.Provider>
    </div>
  );
};

export default ActorProvider;
