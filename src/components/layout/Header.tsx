import { useEffect, useState } from "react";
import { FaBus } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router";
import UserProfileDropdown from "./UserProfileDropdown";
import { customThrottle } from "@/utils/commonUtils";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [transparentBg, setTransparentBg] = useState(isHomePage);

  useEffect(() => {
    if (isHomePage) {
      function handleScroll() {
        if (window.scrollY > 75) {
          setTransparentBg(false);
        } else {
          setTransparentBg(true);
        }
      }
      // implementing throttled Scroll function as scroll is fired multiple times in short duration
      const throttledScroll = customThrottle(handleScroll, 100);
      throttledScroll();
      window.addEventListener("scroll", throttledScroll);
      return () => window.removeEventListener("scroll", throttledScroll);
    }
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 z-40 w-full ${
        isHomePage && transparentBg ? "bg-transparent" : "bg-dark-muted"
      }`}
    >
      <div className="custom-container relative flex items-center justify-between gap-6 py-3 md:py-5">
        {/* logo */}
        <Link
          to="/"
          className="font-poppins text-theme-600 flex items-center gap-2 text-3xl font-semibold"
        >
          <FaBus />
          <h1 className="hidden md:block">Busly</h1>
        </Link>
        <nav>
          <ul
            className={`flex gap-4 text-base font-bold ${
              isHomePage && transparentBg ? "text-textSecondary" : "text-white"
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
                Buses
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
        <UserProfileDropdown />
      </div>
    </header>
  );
}
