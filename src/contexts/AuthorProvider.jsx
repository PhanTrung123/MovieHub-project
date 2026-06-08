import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextAuthors = createContext();

export const AuthorProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime("Authors", (authorsList) => {
      setAuthors(authorsList);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextAuthors.Provider value={authors}>
        {children}
      </ContextAuthors.Provider>
    </div>
  );
};

export default AuthorProvider;
