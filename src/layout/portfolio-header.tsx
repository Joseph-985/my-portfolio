import { useDarkModeContext } from "../context/dark-mode-context";
import CustomIcon from "../components/CustomIcon";
import { useEffect, useState } from "react";
import { IconName } from "../types/app";
import { useNavigate } from "react-router-dom";
import { downloadCvPDFHandler } from "../helpers/functions";
import { Button } from "antd";

const PortfolioHeader = () => {
  const [icon, setIcon] = useState<IconName>("SunIcon");
  const { toggleMode, dark } = useDarkModeContext();

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
      }}
    >
      <div className="flex items-center justify-end gap-x-2">
        <div className="flex items-center justify-center gap-x-3">
          <Button
            className="rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-purple-400/40 text-white dark:bg-purple-600"
            onClick={() => navigate("/my-resume")}
            size="large"
          >
            View My Resume
          </Button>
          <Button
            className="rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-purple-400/40 text-white dark:bg-purple-600"
            onClick={() => downloadCvPDFHandler()}
            size="large"
          >
            Download My Resume
          </Button>
        </div>
        <button
          onClick={toggleMode}
          className="text-purple-600 dark:text-slate-200"
        >
          <div className="rounded-full w-[40px] h-[40px] bg-white mx-auto flex items-center justify-center dark:bg-purple-600 shadow-lg">
            <CustomIcon icon={icon} className="w-[25px] h-[25px]" />
          </div>
        </button>
      </div>
    </div>
  );
};
export default PortfolioHeader;
