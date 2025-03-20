import { Outlet } from "react-router-dom";
import PortfolioHeader from "./portfolio-header";
import { useColors } from "../hooks/useColors";
import Template from "../components/framer-motion/Template";

const PortfolioLayout = () => {
  const { appBgGradient } = useColors();
  return (
    <main className={`min-h-screen ${appBgGradient}`}>
      <PortfolioHeader />
      <Template>
        <div className="min-w-screen hide-scrollbar relative mx-auto overflow-x-hidden pb-[100px] lg:pb-[100px]">
          <Outlet />
        </div>
      </Template>
    </main>
  );
};

export default PortfolioLayout;
