import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { mainLayoutRoutes, noLayoutRoutes } from "./routes/routes";
import { Suspense } from "react";
import { Spinner } from "flowbite-react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex h-[100vh] w-full">
              <Spinner></Spinner>
            </div>
          }
        >
          <Routes>
            {mainLayoutRoutes.map((route) => (
              <Route
                path={route.path}
                element={<MainLayout>{route.element}</MainLayout>}
              ></Route>
            ))}
            {noLayoutRoutes.map((route) => (
              <Route path={route.path} element={route.element}></Route>
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
