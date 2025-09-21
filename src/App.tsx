import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/components/layout/Layout";
import NotFound from "./pages/fallback/NotFound";
import Error from "./pages/fallback/Error";
import ScreenLoader from "./components/common/ScreenLoader";
import PrivateRoute from "./components/auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await import("./pages/home/Home")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "buses",
        lazy: {
          Component: async () => (await import("./pages/buses/Buses")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "cities",
        lazy: {
          Component: async () =>
            (await import("./pages/cities/Cities")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "search",
        lazy: {
          Component: async () =>
            (await import("./pages/search/Search")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "book",
        lazy: {
          Component: async () => (await import("./pages/book/Book")).default,
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "/ticket",
        lazy: {
          Component: async () => {
            const TicketList = (await import("./pages/ticket/TicketList"))
              .default;
            return () => (
              <PrivateRoute>
                <TicketList />
              </PrivateRoute>
            );
          },
        },
        HydrateFallback: ScreenLoader,
      },
      {
        path: "ticket/:ticketId",
        lazy: {
          Component: async () => {
            const TicketInfo = (await import("./pages/ticket/TicketInfo"))
              .default;
            return () => (
              <PrivateRoute>
                <TicketInfo />
              </PrivateRoute>
            );
          },
        },
        HydrateFallback: ScreenLoader,
      },
    ],
  },
  {
    path: "/login",
    lazy: {
      Component: async () => (await import("./pages/auth/Login")).default,
    },
    HydrateFallback: ScreenLoader,
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
