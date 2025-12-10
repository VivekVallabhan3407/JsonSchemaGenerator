import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type JsonStateType = {
  jsonObject: any;
  setJsonObject: (value: any) => void;
};

const JsonStateContext = createContext<JsonStateType | undefined>(undefined);

export const JsonStateProvider = ({ children }: { children: ReactNode }) => {
  const [jsonObject, setJsonObject] = useState<any>(null);

  return (
    <JsonStateContext.Provider value={{ jsonObject, setJsonObject }}>
      {children}
    </JsonStateContext.Provider>
  );
};

export const useStateJson = () => {
  const context = useContext(JsonStateContext);
  if (!context) {
    throw new Error("useStateJson must be used inside JsonStateProvider");
  }
  return context;
};
