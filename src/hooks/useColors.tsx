import { useTheme } from "../context/theme-context";

export const useColors = () => {
  const { dark } = useTheme();
  console.log("Dark mode is", dark);

  const textGradient = dark
    ? "bg-gradient-to-r from-purple-600 via-blue-600 to-purple-400 inline-block text-transparent bg-clip-text"
    : "bg-gradient-to-r from-slate-200 via-blue-400 to-purple-400 inline-block text-transparent bg-clip-text";
  const bgGradient = dark
    ? "bg-gradient-to-r from-purple-600 to-purple-400"
    : "bg-gradient-to-r from-purple-600 to-slate-200";

  const appBgGradient = dark
    ? "!bg-gradient-to-b from-[#222438] via-blue-600 to-purple-500"
    : "!bg-gradient-to-b from-white via-slate-100 to-purple-400";

  const nameGradient = dark
    ? "!bg-gradient-to-r from-slate-200 via-blue-400 to-purple-400 !inline-block !text-transparent !bg-clip-text"
    : "!bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 !inline-block !text-transparent !bg-clip-text";

  const titleGradient = dark
    ? "!bg-gradient-to-r from-purple-600 via-white to-purple-400 !inline-block !text-transparent !bg-clip-text"
    : "!bg-gradient-to-r from-purple-600 via-blue-600 to-purple-400 !inline-block !text-transparent !bg-clip-text";

  const skillCardGradient = dark
    ? "!bg-white/10 backdrop-blur-md border border-white/2"
    : "!bg-gradient-to-r from-purple-400 to-blue-200";

  return {
    textGradient,
    bgGradient,
    appBgGradient,
    nameGradient,
    titleGradient,
    skillCardGradient,
  };
};
