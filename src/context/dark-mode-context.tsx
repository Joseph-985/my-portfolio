import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext({
  dark: true,
  toggleMode: () => {},
});

export const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState(true);

  const toggleMode = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  const value = {
    dark: isDark,
    toggleMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
