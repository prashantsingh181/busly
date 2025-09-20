// import CityCard from "@/components/common/CityCard";
import { buses } from "@/data/bus";
import type { Bus } from "@/types/bus";
import { FaChair, FaRoute } from "react-icons/fa";

export default function Buses() {
  return (
    <main className="main-margin-top bg-[url('/blob-scene-haikei.png')] bg-no-repeat bg-cover bg-center">
      <div className="custom-container py-10">
        <h2 className="section-heading mb-8">
          Our <span className="text-theme-700 italic">Bus</span> collection
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {buses.map((bus) => (
            <BusCard key={bus.id} bus={bus} />
            // <CityCard key={city.code} city={city} noClampDescription />
          ))}
        </div>
      </div>
    </main>
  );
}

interface BusCardProps {
  bus: Bus;
}

function BusCard({ bus }: Readonly<BusCardProps>) {
  let bgColor;
  switch (bus.type) {
    case "Seater":
      bgColor = "bg-amber-200 border border-amber-400 text-amber-700";
      break;
    case "Sleeper":
      bgColor = "bg-indigo-200 border border-indigo-400 text-indigo-700";
      break;
    default:
      bgColor = "bg-violet-200 border border-violet-400 text-violet-700";
  }

  return (
    <div className="card flex flex-col gap-3 overflow-hidden rounded-xl border border-neutral-200 p-4 shadow transition hover:shadow-md">
      {/* Image with bus type badge */}
      <div className="relative mb-3 h-[15rem] w-full overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          src={bus.img}
          alt={bus.name}
        />
        <span
          className={`${bgColor} absolute top-2 left-2 rounded-xl px-2 py-1 text-xs font-medium shadow`}
        >
          {bus.type}
        </span>
      </div>

      {/* Bus Info */}
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins text-lg font-semibold">{bus.name}</h2>
        {bus.description && (
          <p className="line-clamp-2 text-sm text-neutral-800/75">
            {bus.description}
          </p>
        )}

        <div className="flex items-center gap-2 text-sm text-neutral-700">
          <FaChair className="text-neutral-500" />
          <span>{bus.totalSeats} seats</span>
        </div>

        {bus.routeIds && bus.routeIds.length > 0 && (
          <div className="flex items-start gap-2 text-sm text-neutral-700">
            <FaRoute className="mt-0.5 text-neutral-500" />
            <span className="flex-1">Routes: {bus.routeIds.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}
