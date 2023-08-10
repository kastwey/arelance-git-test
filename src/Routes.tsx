import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AgusPage } from "./pages/AgusPage";
import { JuanjoPage } from "./pages/JuanjoPage";
import { JuanLuisPage } from "./pages/JuanLuisPage";
import { IndexPage } from "./pages/IndexPage";
import { AboutProjectPage } from "./pages/AboutProjectPage";
import { GeorgianaPage } from "./pages/GeorgianaPage";
const router = createBrowserRouter([
  {
    path: "",
    element: <IndexPage />,
  },
  {
    path: "people/juanluis",
    element: <JuanLuisPage />,
  },
  {
    path: "people/juanjo",
    element: <JuanjoPage />,
  },
  {
    path: "people/georgiana",
    element: <GeorgianaPage />,
  },
  {
    path: "people/agus",
    element: <AgusPage />,
  },
  {
    path: "about",
    element: <AboutProjectPage />,
  },
]);

export function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
