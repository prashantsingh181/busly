import type { BusStop, BusWithRoute } from "@/types/bus";
import { getCityByCityCode } from "@/data/city";
import InfoRow from "@/components/common/InfoRow";
import { FaLocationDot, FaMoneyBill } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { memo, useState } from "react";
import { useNavigate } from "react-router";
import { formatPrice } from "@/utils/formatUtils";

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
        className="h-[8rem] w-full rounded-xl object-cover md:h-[10rem]"
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
        <div className="mx-auto mt-4 grid max-w-[20rem] grid-cols-3 place-items-center">
          <h5 className="mb-3 text-xs font-medium text-neutral-400 md:text-sm">
            Arrival
          </h5>
          <h5 className="mb-3 text-xs font-medium text-neutral-400 md:text-sm">
            Bus Stop
          </h5>
          <h5 className="mb-3 text-xs font-medium whitespace-nowrap text-neutral-400 md:text-sm">
            Departure
          </h5>
          {routeInfo.route.stops.map((stop, index) => (
            <JourneyStops
              key={stop.city}
              stop={stop}
              hasLine={index !== 0}
              stopActive={
                startIndex !== null &&
                endIndex !== null &&
                index >= startIndex &&
                index <= endIndex
              }
              lineActive={
                startIndex !== null &&
                endIndex !== null &&
                index > startIndex &&
                index <= endIndex
              }
            />
          ))}
        </div>
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

interface JourneyStopsProps {
  stop: BusStop;
  hasLine?: boolean;
  stopActive?: boolean;
  lineActive?: boolean;
}
function JourneyStops({
  stop,
  hasLine = true,
  stopActive = false,
  lineActive = false,
}: Readonly<JourneyStopsProps>) {
  const city = getCityByCityCode(stop.city);
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <>
      {hasLine && (
        <div
          className={`col-span-full h-16 w-[2px] ${
            lineActive ? "bg-theme-500" : "bg-neutral-500"
          } mx-auto`}
        />
      )}
      <div className="font-poppins text-xs font-medium text-neutral-700/75 md:text-sm">
        {stop.arrival ?? "Starts here"}
      </div>
      <div
        className={`font-poppins relative rounded-xl border ${
          stopActive
            ? "border-theme-500 bg-theme-100 text-theme-700"
            : "border-neutral-500 bg-neutral-200/75 text-neutral-700"
        } cursor-pointer p-2 text-xs font-semibold md:text-sm`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        onFocus={handleMouseEnter}
        onBlur={handleMouseOut}
        tabIndex={0}
      >
        {stop.city}
        {isHovered && city && (
          <div className="left-arrow top-1/2 right-0 z-10 translate-x-[120%] -translate-y-1/2 rounded bg-neutral-200 px-3 py-1 shadow">
            {city.name}
          </div>
        )}
      </div>
      <div className="font-poppins text-xs font-medium text-neutral-700/75 md:text-sm">
        {stop.departure ?? "Ends Here"}
      </div>
    </>
  );
}
