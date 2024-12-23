import { lazy } from "react";
import React from "react";
import CarDetailPage from "../pages/CarDetailPage/CarDetailPage";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Search = lazy(() => import("../pages/Search/Search"));
const AddCar = lazy(() => import("../pages/AddCar/AddCar"));
const CarList = lazy(() => import("../pages/CarList/CarList"));

export const mainLayoutRoutes: RouteConfig[] = [
  { path: "", element: <Homepage /> },
  { path: "addcar", element: <AddCar /> },
  { path: "listcar", element: <CarList /> },
  { path: "/cardetail/:id", element: <CarDetailPage /> },
];

export const noLayoutRoutes: RouteConfig[] = [
  { path: "search", element: <Search /> },
];
