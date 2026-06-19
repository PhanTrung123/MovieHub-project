import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextEpisodes = createContext();

export const EpisodeProvider = ({ children }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime("Episodes", (episodesList) => {
      setEpisodes(episodesList);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextEpisodes.Provider value={episodes}>
        {children}
      </ContextEpisodes.Provider>
    </div>
  );
};

export default EpisodeProvider;
