import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


let login = true;

let routes;

if (true) {
  routes = [
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/login",
      element: <Login/>
    },
  ];
} else {
  routes = [
    {
      path: "/home",
      element: <Home/>
    },
  ];
}

const router = createBrowserRouter(routes);

export default router;
