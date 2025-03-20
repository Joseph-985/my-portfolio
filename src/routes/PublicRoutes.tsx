import { RouteObject } from "react-router-dom";
import MyResume from "../pages/my-resume";
import Home from "../pages/home";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-resume",
    element: <MyResume />,
  },
];
