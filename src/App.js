
import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contactus";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutclass from "./components/About";
import Usercontext from "./utlis/Usercontext";

const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {

  const [userName, setuserName] = useState(null);

  useEffect(() => {
    //make an api call and send username and password 
    const data = {
      Name: "abhijith ms "
    }
    setuserName(data.Name);
  }, [])
  return (
    <Usercontext.Provider value={{ loggedInContext: userName ,setuserName }}>
      <div className="app bg-gray-50">
        <Header />
        <Outlet />
      </div>
    </Usercontext.Provider>
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
      path: "/grocery",
      element: <Suspense fallback={<h1>loading.....</h1>}><Grocery /></Suspense>
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
