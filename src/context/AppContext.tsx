"use client";

import useRealTimeLocalStorage from "@/hooks/useRealTimeLocalStorageHook";
import { IApp, IAppContext, IAppContextProviderProps } from "@/types/context";
import { createContext, useContext } from "react";

const AppContext = createContext<IAppContext | null>({});

export function AppContextProvider({ children }: IAppContextProviderProps) {
  const [app, setApp] = useRealTimeLocalStorage<IApp>("app", {});
  const [auth, setAuth] = useRealTimeLocalStorage<IApp>("auth", {});
  const [cart, setCart] = useRealTimeLocalStorage<IApp>("cart", {});

  return (
    <AppContext.Provider value={{ app, setApp, auth, setAuth, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}
