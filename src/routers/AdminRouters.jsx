import { Route, Routes } from "react-router-dom";
import Movies from "../pages/admin/media_management/movies/Movies";
import Sections from "../pages/admin/media_management/sections/Sections";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Categories from "../pages/admin/metadata/categories/Categories";
import Authors from "../pages/admin/cast_crew/authors/Authors";
import Characters from "../pages/admin/cast_crew/characters/Characters";
import Actors from "../pages/admin/cast_crew/actors/Actors";
import Plans from "../pages/admin/vip/plans/plans";
import MovieTypes from "../pages/admin/metadata/movie_type/MovieType"
import Episodes from "../pages/admin/media_management/episodes/Episodes";
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
    {
      path: "/admin/authors",
      element: <Authors />,
    },
    {
      path: "/admin/characters",
      element: <Characters />,
    },
    {
      path: "/admin/actors",
      element: <Actors />,
    },
    {
      path: "/admin/plans",
      element: <Plans />
    },
    {
      path: "/admin/movie_types",
      element: <MovieTypes />
    },
    {
      path: "/admin/episodes",
      element: <Episodes />
    }
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
