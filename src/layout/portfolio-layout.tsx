import { Outlet } from "react-router-dom";
import PortfolioHeader from "./portfolio-header";
import { useColors } from "../hooks/useColors";

const PortfolioLayout = () => {
  const { appBgGradient } = useColors();
  return (
    <main className={`min-h-screen ${appBgGradient}`}>
      <PortfolioHeader />
      <div className="min-w-screen hide-scrollbar relative mx-auto overflow-x-hidden pb-[100px] lg:pb-[100px]">
        <Outlet />
      </div>
    </main>
  );
};

export default PortfolioLayout;
