import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="font-inter">
        <Outlet />
      </div>
    </div>
  );
}
