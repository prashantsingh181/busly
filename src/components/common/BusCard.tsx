import { FaLocationDot, FaMoneyBill, FaRoute } from "react-icons/fa6";
import type { BusWithRoute } from "@/types/bus";
import InfoRow from "./InfoRow";
import { formatPrice } from "@/utils/formatUtils";

interface BusCardProps {
  bus: BusWithRoute;
}

export default function BusCard({ bus }: Readonly<BusCardProps>) {
  const from = bus.routeInfo.route.stops.find(
    (stop) => stop.city === bus.routeInfo.from,
  )!;
  const to = bus.routeInfo.route.stops.find(
    (stop) => stop.city === bus.routeInfo.to,
  )!;
  return (
    <div className="card group flex cursor-pointer flex-col overflow-hidden sm:flex-row">
      <div className="sm overflow-hidden rounded-tl-lg rounded-tr-lg sm:w-[14rem] sm:rounded-tr-none sm:rounded-bl-lg">
        <img
          src={bus.img}
          alt={bus.name}
          width={170}
          height={170}
          className="h-full w-full object-cover object-left transition-transform group-hover:scale-105"
        />
      </div>
      <div className="h-full flex-1 p-4">
        <div className="flex flex-col">
          <h3 className="text-textSecondary line-clamp-1 text-lg font-semibold md:text-xl">
            {bus.name}
          </h3>
          <InfoRow
            label="From"
            icon={FaLocationDot}
            text={`${from.city} (${from.departure})`}
          />
          <InfoRow
            label="To"
            icon={FaLocationDot}
            text={`${to.city} (${to.arrival})`}
          />
          <InfoRow
            label="Fare"
            icon={FaMoneyBill}
            text={formatPrice(to.fare - from.fare)}
          />
          <InfoRow label="Route" icon={FaRoute} text={bus.routeInfo.route.id} />
        </div>
      </div>
    </div>
  );
}
