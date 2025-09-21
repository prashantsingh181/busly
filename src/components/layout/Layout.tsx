import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="font-inter min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
