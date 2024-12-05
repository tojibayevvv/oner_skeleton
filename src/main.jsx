import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { ShopContext } from "./context/shop-context/index.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContext>
    <RouterProvider router={router} />
  </ShopContext>
);
