import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import PortfolioLayout from "../layout/portfolio-layout";

export const routes = createBrowserRouter([
  { path: "/", element: <PortfolioLayout />, children: PublicRoutes },
]);
