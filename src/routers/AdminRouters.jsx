import { Route, Routes } from "react-router-dom";
import Movies from "../pages/admin/media_management/movies/Movies";
import Sections from "../pages/admin/media_management/sections/Sections";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Categories from "../pages/admin/metadata/categories/Categories";
function AdminRouters() {
  const routers = [
    {
      path: "/admin",
      element: <Dashboard />,
    },
    {
      path: "/admin/sections",
      element: <Sections />,
    },
    {
      path: "/admin/movies",
      element: <Movies />,
    },
     {
      path: "/admin/categories",
      element: <Categories />,
    },
  ];
  return (
    <Routes>
      {routers.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default AdminRouters;
