import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextMovies = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime(
      "Movies",
      (moviesList) => {
        setMovies(moviesList);
      },
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextMovies.Provider value={movies}>
        {children}
      </ContextMovies.Provider>
    </div>
  );
};

export default MovieProvider;
