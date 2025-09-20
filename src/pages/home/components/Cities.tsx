import { cities } from "../../../data/city";
import type { City } from "../../../types/city";

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
        <div className="custom-container py-10 flex flex-col gap-6">
          <h2 className="font-poppins font-extrabold text-[2.25rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] text-center">
            Cities We cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

interface CityCardProps {
  city: City;
}

function CityCard({ city }: Readonly<CityCardProps>) {
  return (
    <div className="card rounded-3xl overflow-hidden bg-white group">
      <div className="w-full h-[15rem] md:h-[20rem] overflow-hidden">
        <img
          src={city.img}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="font-semibold text-base md:text-lg text-neutral-900/75">
          {city.name} ({city.code})
        </h3>
        <p className="text-sm md:text-base text-neutral-700/75 line-clamp-2">
          {city.description}
        </p>
      </div>
    </div>
  );
}
