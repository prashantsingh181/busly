import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import Book from "@/pages/book/Book";
import Cities from "./pages/cities/Cities";
import Buses from "./pages/buses/Buses";
import NotFound from "./pages/fallback/NotFound";
import Error from "./pages/fallback/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "buses", element: <Buses /> },
      { path: "cities", element: <Cities /> },
      { path: "search", element: <Search /> },
      { path: "book", element: <Book /> },
    ],
  },
  {path: "*", element: <NotFound />}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
