import type { BusStop, BusWithRoute } from "@/types/bus";
import { getCityByCityCode } from "@/data/city";
import InfoRow from "@/components/common/InfoRow";
import { FaLocationDot, FaMoneyBill } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { memo } from "react";
import { useNavigate } from "react-router";
import { formatPrice } from "@/utils/formatUtils";
import RouteMap from "./RouteMap";

interface SelectedBusAsideProps {
  bus: BusWithRoute;
  date: string;
  showButton?: boolean;
}

function SelectedBusAside({
  bus,
  date,
  showButton = true,
}: Readonly<SelectedBusAsideProps>) {
  const navigate = useNavigate();
  const routeInfo = bus.routeInfo;
  const { startStop, endStop, startIndex, endIndex } =
    routeInfo.route.stops.reduce(
      (acc, stop, index) => {
        if (stop.city === routeInfo.from) {
          return { ...acc, startStop: stop, startIndex: index };
        } else if (stop.city === routeInfo.to) {
          return { ...acc, endStop: stop, endIndex: index };
        } else {
          return acc;
        }
      },
      {
        startStop: null as BusStop | null,
        endStop: null as BusStop | null,
        startIndex: null as number | null,
        endIndex: null as number | null,
      },
    );

  function handleBooking() {
    const searchParams = new URLSearchParams({
      busId: bus.id,
      routeId: routeInfo.route.id,
      from: routeInfo.from,
      to: routeInfo.to,
      date: date,
    });
    navigate(`/book?${searchParams.toString()}`);
  }

  return (
    <aside>
      <h3 className="text-textPrimary mb-4 text-lg font-semibold md:text-xl">
        Bus Selection:
      </h3>
      <img
        className="h-[12rem] w-full rounded-xl object-cover md:h-[16rem]"
        src={bus.img}
        alt={bus.name}
      />
      <div className="mt-6 flex flex-col gap-3">
        <h3 className="text-textPrimary text-lg font-semibold md:text-xl">
          {bus.name}
        </h3>
        {startStop && (
          <InfoRow
            label="From"
            icon={FaLocationDot}
            text={`${getCityByCityCode(startStop.city)?.name} (${startStop.departure})`}
          />
        )}
        {endStop && (
          <InfoRow
            label="To"
            icon={FaLocationDot}
            text={`${getCityByCityCode(endStop.city)?.name} (${endStop.arrival})`}
          />
        )}
        {startStop && endStop && (
          <InfoRow
            label="Fare"
            icon={FaMoneyBill}
            text={`${formatPrice(endStop.fare - startStop.fare)} (GST included)`}
          />
        )}
        <h4 className="mt-4 text-sm font-semibold md:text-base">Bus Route:</h4>
        <RouteMap
          route={routeInfo.route}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
      {showButton && (
        <button
          className="primary-button mt-8 flex w-full items-center justify-center gap-2"
          onClick={handleBooking}
        >
          <IoTicketSharp />
          <span>Book Tickets</span>
        </button>
      )}
    </aside>
  );
}

export default memo(SelectedBusAside);
