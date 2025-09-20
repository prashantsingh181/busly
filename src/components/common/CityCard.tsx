import type { City } from "@/types/city";

interface CityCardProps {
  city: City;
  noClampDescription?: boolean;
}

export default function CityCard({
  city,
  noClampDescription = false,
}: Readonly<CityCardProps>) {
  return (
    <div className="card group overflow-hidden rounded-3xl bg-white">
      <div className="h-[15rem] w-full overflow-hidden md:h-[20rem]">
        <img
          src={city.img}
          alt={city.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-dark-muted text-base font-semibold md:text-lg">
          {city.name} ({city.code})
        </h3>
        <p
          className={`${noClampDescription ? "" : "line-clamp-2"} text-sm text-neutral-800/75 md:text-base`}
        >
          {city.description}
        </p>
      </div>
    </div>
  );
}
