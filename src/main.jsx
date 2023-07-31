import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PokedexContextProvider } from "./context/PokedexContext";
import ListPokedex from "./components/ListPokedex";
import Home from "./components/Home";
import Root/* , { loader as rootLoader } */ from "./routes/root";
import ErrorPage from "./error-page";
import PagePoke from './components/PagePoke'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "listapokemon",
        element: <ListPokedex />,
    /*     children: [
          {
            path: "hola/:pokeId",
            element: < PagePoke/>,
          }
        ] */
      },
      {
         path: "hola/:pokeId",
         element: < PagePoke/>,
       },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  /*  <React.StrictMode> */

  <PokedexContextProvider>
    <div className="header">

    </div>
    <RouterProvider router={router} />
    {/*  <App />  */}
  </PokedexContextProvider>

  /* </React.StrictMode> */
);
