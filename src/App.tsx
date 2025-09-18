import { createBrowserRouter, RouterProvider } from "react-router";
import Page1 from "./Page1";
import Page2 from "./Page2";

const router = createBrowserRouter([
  { path: "/", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
