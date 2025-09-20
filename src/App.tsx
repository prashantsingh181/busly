import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import Book from "@/pages/book/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "search", element: <Search /> },
      { path: "book", element: <Book /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
