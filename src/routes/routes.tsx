import { lazy } from "react";
import React from "react";
import CarDetailPage from "../pages/CarDetailPage/CarDetailPage";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const AddCar = lazy(() => import("../pages/AddCar/AddCar"));
const CarList = lazy(() => import("../pages/CarList/CarList"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

export const mainLayoutRoutes: RouteConfig[] = [
  { path: "", element: <Homepage /> },
  { path: "addcar", element: <AddCar /> },
  { path: "listcar", element: <CarList /> },
  { path: "/cardetail/:id", element: <CarDetailPage /> },
  { path: "/about/", element: <About /> },
  { path: "/contact/", element: <Contact /> },
];

export const noLayoutRoutes: RouteConfig[] = [];
