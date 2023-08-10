import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JuanjoPage } from "./pages/JuanjoPage";
import { JuanLuisPage } from "./pages/JuanLuisPage";
import { MoiPage } from "./pages/MoiPage";
import { IndexPage } from "./pages/IndexPage";
import { AboutProjectPage } from "./pages/AboutProjectPage";
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
    path: "people/moi",
    element: <MoiPage/>,
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
