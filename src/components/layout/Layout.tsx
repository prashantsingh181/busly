import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="font-inter">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
