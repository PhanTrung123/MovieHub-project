import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextMovieTypes = createContext();

export const MovieTypeProvider =  ({ children }) => {
  const [movieTypes, setMovieTypes] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime(
      "Movie_types",
      (movieTypeList) => {
        setMovieTypes(movieTypeList);
      },
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextMovieTypes.Provider value={movieTypes}>
        {children}
      </ContextMovieTypes.Provider>
    </div>
  );
}

export default MovieTypeProvider;
