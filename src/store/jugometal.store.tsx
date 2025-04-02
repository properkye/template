import React, { createContext, useContext, useState, ReactNode } from "react";

type Screen = {
  title: string;
  url: string;
};

type JugometalContextType = {
  screen: Screen;
  setScreen: (screen: Screen) => void;
};

const JugometalContext = createContext<JugometalContextType | undefined>(
  undefined
);

export const JugometalProvider = ({ children }: { children: ReactNode }) => {
  const [screen, setScreen] = useState<Screen>({
    title: "Dodajte nov proizvod",
    url: "nov-proizvod",
  });

  return (
    <JugometalContext.Provider value={{ screen, setScreen }}>
      {children}
    </JugometalContext.Provider>
  );
};

export const useJugometal = () => {
  const context = useContext(JugometalContext);
  if (!context) {
    throw new Error("useJugometal must be used within a JugometalProvider");
  }
  return context;
};
