import { FaLocationDot, FaMoneyBill } from "react-icons/fa6";
import type { BusWithRoute } from "../../types/bus";
import InfoRow from "./InfoRow";

interface BusCardProps {
  bus: BusWithRoute;
}

export default function BusCard({ bus }: Readonly<BusCardProps>) {
  const from = bus.routeInfo.route.stops.find(
    (stop) => stop.city === bus.routeInfo.from
  )!;
  const to = bus.routeInfo.route.stops.find(
    (stop) => stop.city === bus.routeInfo.to
  )!;
  return (
    <div className="card flex flex-col sm:flex-row overflow-hidden cursor-pointer">
      <div className="sm:w-[14rem] overflow-hidden rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm sm:rounded-bl-lg">
        <img
          src={bus.img}
          alt={bus.name}
          width={170}
          height={170}
          className="h-full w-full object-cover object-left"
        />
      </div>
      <div className="h-full flex-1 p-4">
        <div className="flex flex-col">
          <h3 className="text-textSecondary line-clamp-1 text-lg md:text-xl font-semibold">
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
            text={String(to.fare - from.fare)}
          />
          {/* {event.endTime && (
            <InfoRow
              label="End Date"
              icon={FaCalendarAlt}
              text={eventEndDate}
            />
          )} */}
        </div>
      </div>
    </div>
  );
}
