import CityCard from "@/components/common/CityCard";
import { cities } from "@/data/city";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router";

export default function Cities() {
  return (
    <>
      <svg
        width="1440"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave wave1"
      >
        <g clipPath="url(#clip0_68_174)">
          <path
            d="M0 84.2187C0 84.2187 190.153 16.1668 384.499 19.8134C477.351 21.5556 726.391 89.2879 967.726 49.0654C1209.06 8.84281 1440 84.2187 1440 84.2187V100H0V84.2187Z"
            fill="var(--theme-200)"
          />
        </g>
        <defs>
          <clipPath id="clip0_68_174">
            <rect width="1440" height="100" fill="var(--theme-200)" />
          </clipPath>
        </defs>
      </svg>
      <section className="bg-theme-200">
        <div className="custom-container flex flex-col gap-6 py-10">
          <div className="relative flex w-full items-center justify-center">
            <h2 className="section-heading">
              <span className="text-theme-700 italic">Cities</span> We cover
            </h2>
            <Link
              to="/cities"
              className="text-textSecondary hover-scale absolute right-0 flex items-center gap-1"
            >
              <span className="hidden sm:inline">View all</span>
              <FiChevronsRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cities.slice(0, 4).map((city) => (
              <CityCard key={city.code} city={city} />
            ))}
          </div>
        </div>
      </section>
      <svg
        width="1440"
        viewBox="0 0 1440 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave wave2"
      >
        <g clipPath="url(#clip0_68_211)">
          <rect
            width="1440"
            height="100"
            transform="matrix(-1 0 0 -1 1440 100.315)"
            fill="white"
          />
          <path
            d="M1440 16.0967C1440 16.0967 1249.85 84.1487 1055.5 80.5021C962.649 78.7598 713.609 11.0275 472.274 51.2501C230.939 91.4726 0 16.0967 0 16.0967V0.315453H1440V16.0967Z"
            fill="var(--theme-200)"
          />
        </g>
        <defs>
          <clipPath id="clip0_68_211">
            <rect
              width="1440"
              height="100"
              fill="var(--theme-200)"
              transform="matrix(-1 0 0 -1 1440 100.315)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
