import { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
export const ContextAccount = createContext();

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDocumentsRealtime("Accounts", (s) => {
      setAccounts(s);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <ContextAccount.Provider value={accounts}>{children}</ContextAccount.Provider>
    </div>
  );
};

export default AccountProvider;
