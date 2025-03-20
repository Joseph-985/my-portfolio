import { useEffect, useState } from "react";

export const useMobileView = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobileView = width < 1024;
  const isMediumLaptop = width === 1024;
  return { isMobileView, isMediumLaptop };
};
