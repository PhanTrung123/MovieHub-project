import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextCategories = createContext();

export const CategoryProvider =  ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime(
      "Categories",
      (categoriesList) => {
        setCategories(categoriesList);
      },
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextCategories.Provider value={categories}>
        {children}
      </ContextCategories.Provider>
    </div>
  );
}

export default CategoryProvider;
