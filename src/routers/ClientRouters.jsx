import { Route, Routes } from "react-router-dom";
import Home from "../pages/client/home/Home";
import { patch } from "@mui/material";
import Login from "../components/client/Login";
import SignUp from "../components/client/SignUp";

function ClientRouters() {
  const routersClient = [
    {
        path:"/client",
        element: <Home />
    },
    {
        patch: "/client/login",
        element: <Login />
    },
     {
        patch: "/client/signup",
        element: <SignUp />
    }
  ];
  return (
    <Routes>
      {routersClient.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default ClientRouters;
