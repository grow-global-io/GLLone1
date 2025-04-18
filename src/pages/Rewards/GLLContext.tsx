import React, { createContext, useContext, useState, ReactNode } from "react";

interface GllContextType {
  gllBalance: number;
  setGllBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface GllProviderProps {
  children: ReactNode;
}

const GllContext = createContext<GllContextType | undefined>(undefined);

export const useGll = (): GllContextType => {
  const context = useContext(GllContext);
  if (!context) {
    throw new Error("useGll must be used within a GllProvider");
  }
  return context;
};

export const GllProvider: React.FC<GllProviderProps> = ({ children }) => {
  const [gllBalance, setGllBalance] = useState<number>(
    parseInt(localStorage.getItem('gll_balance') || '0', 10)
  );

  return (
    <GllContext.Provider value={{ gllBalance, setGllBalance }}>
      {children}
    </GllContext.Provider>
  );
};
