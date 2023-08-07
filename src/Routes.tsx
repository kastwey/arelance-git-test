import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JuanjoPage } from "./pages/JuanjoPage";
import { IndexPage } from "./pages/IndexPage";
import { Header } from "./components/header";
const router = createBrowserRouter([
  {
    path: "",
    element: <IndexPage />,
  },
  {
    path: "people/juanjo",
    element: <JuanjoPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
