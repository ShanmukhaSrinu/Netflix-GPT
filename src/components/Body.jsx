import Login from "./Login";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from "./About";
import { lazy, Suspense } from "react";
import Error from "./Error";


const Body = () => {
  
  const Browse=lazy(()=>import("./Browse"))
// 
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement:<Error/>
    },
    {
      path: "/browse",
      element: <Suspense fallback={<div>loading </div>}> <Browse /></Suspense>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    
  ]
  )
 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
