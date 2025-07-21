
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contactus";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutclass from "./components/About";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Body />
    }, {
      path: "/About",
      element: <Aboutclass />
    },
    {
      path: "/Contact",
      element: <Contact />
    },
    {
      path: "/restaurants/:resId",
      element: <Resmenu />
    }

    ],
    errorElement: <Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
