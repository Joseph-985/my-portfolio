import { useDarkModeContext } from "../context/dark-mode-context";
import CustomIcon from "../components/CustomIcon";
import { useEffect, useState } from "react";
import { IconName } from "../types/app";
import { useNavigate } from "react-router-dom";
import { downloadCvPDFHandler } from "../helpers/functions";
import { Button } from "antd";
import { useMobileView } from "../hooks/useMobileView";

const PortfolioHeader = () => {
  const [icon, setIcon] = useState<IconName>("SunIcon");
  const { toggleMode, dark } = useDarkModeContext();
  const { isMobileView } = useMobileView();

  const navigate = useNavigate();

  useEffect(() => {
    if (dark) {
      setIcon("SunIcon");
    } else {
      setIcon("MoonIcon");
    }
  }, [dark]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        height: "71px",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        width: "100%",
      }}
    >
      <div className="flex items-center justify-center lg:justify-end gap-x-2">
        <div className="flex items-center justify-center gap-x-2">
          <Button
            className="rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-purple-400/40 text-white dark:bg-purple-600 hidden lg:block"
            onClick={() => navigate("/my-resume")}
            size={isMobileView ? "small" : "large"}
          >
            View My Resume
          </Button>
          <Button
            className="rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-purple-400/40 text-white dark:bg-purple-600"
            onClick={() => downloadCvPDFHandler()}
            size={isMobileView ? "small" : "large"}
          >
            Download My Resume
          </Button>
        </div>
        <button
          onClick={toggleMode}
          className="text-purple-600 dark:text-slate-200"
        >
          <div className="rounded-full w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] bg-white flex items-center justify-center dark:bg-purple-600 shadow-lg">
            <CustomIcon
              icon={icon}
              className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[25px] lg:h-[25px]"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
export default PortfolioHeader;
