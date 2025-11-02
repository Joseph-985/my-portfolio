import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type IContext = {
  theme: "light" | "dark";
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<IContext>({
  theme: "light",
  dark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (storedTheme) {
      setTheme(storedTheme);
      setDark(storedTheme === "dark" ? true : false);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDark(false);
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDark(newTheme === "dark" ? true : false);
    localStorage.setItem("theme", newTheme);

    if (theme === "light") {
      setTheme("dark");
      setDark(true);
      document.documentElement.classList.add("dark");
    } else if (theme === "dark") {
      setTheme("light");
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, dark, toggleTheme: handleToggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme context must be used within its provider");
  return context;
};
