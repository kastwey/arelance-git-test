import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JuanjoPage } from "./pages/JuanjoPage";
import { JuanLuisPage } from "./pages/JuanLuisPage";
import { IndexPage } from "./pages/IndexPage";
import { Header } from "./components/header";
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
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
