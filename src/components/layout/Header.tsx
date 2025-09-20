import { useEffect, useState } from "react";
import { FaBus } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const isTransparent = location.pathname === "/";

  const [transparentBg, setTransparentBg] = useState(isTransparent);

  useEffect(() => {
    function handleScroll() {
      if (!isTransparent) return;
      if (window.scrollY > 75) {
        setTransparentBg(false);
      } else {
        setTransparentBg(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparent]);
  useEffect(() => {
    setTransparentBg(isTransparent);
  }, [isTransparent]);
  return (
    <header
      className={`fixed top-0 z-40 w-full ${
        transparentBg ? "bg-transparent" : "bg-dark-muted"
      }`}
    >
      <div className="custom-container relative flex items-center justify-between gap-6 py-3 md:py-5">
        {/* logo */}
        <Link
          to="/"
          className="font-poppins text-theme-600 flex items-center gap-2 text-xl font-semibold md:text-2xl"
        >
          <FaBus />
          <h1>Busly</h1>
        </Link>
        <nav className="hidden md:block">
          <ul
            className={`flex gap-4 text-base font-bold ${
              transparentBg ? "text-textSecondary" : "text-white"
            } lg:gap-5 lg:text-lg`}
          >
            <li>
              <NavLink
                to="/buses"
                className={({ isActive }) =>
                  `hover:text-theme-600 ${
                    isActive
                      ? "text-theme-600 relative overflow-visible after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:bg-current after:content-['']"
                      : ""
                  }`
                }
              >
                Our Buses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cities"
                className={({ isActive }) =>
                  `hover:text-theme-600 ${
                    isActive
                      ? "text-theme-600 relative overflow-visible after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:bg-current after:content-['']"
                      : ""
                  }`
                }
              >
                Cities
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/search" className="primary-button flex items-center gap-2">
          <IoTicketOutline />
          <span>Book Ticket</span>
        </Link>
      </div>
    </header>
  );
}
