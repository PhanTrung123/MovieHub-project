import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextPlans = createContext();

export const CharacterProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime(
      "Plans",
      (plansList) => {
        setPlans(plansList);
      },
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextPlans.Provider value={plans}>
        {children}
      </ContextPlans.Provider>
    </div>
  );
};

export default CharacterProvider;
