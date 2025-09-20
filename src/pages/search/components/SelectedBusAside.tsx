import type { BusStop, BusWithRoute } from "../../../types/bus";
import { getCityByCityCode } from "../../../data/city";
import InfoRow from "../../../components/common/InfoRow";
import { FaLocationDot, FaMoneyBill } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router";

interface SelectedBusAsideProps {
  bus: BusWithRoute;
  date: string;
  showButton?: boolean;
}

export default function SelectedBusAside({
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
      }
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
      <h3 className="text-textPrimary text-lg md:text-xl font-semibold mb-4">
        Bus Selection:
      </h3>
      <img
        className="h-[8rem] md:h-[10rem] w-full object-cover rounded-xl"
        src={bus.img}
        alt={bus.name}
      />
      <div className="flex flex-col gap-3 mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-textPrimary">
          {bus.name}
        </h3>
        {startStop && (
          <InfoRow
            label="From"
            icon={FaLocationDot}
            text={`${startStop.city} (${startStop.departure})`}
          />
        )}
        {endStop && (
          <InfoRow
            label="To"
            icon={FaLocationDot}
            text={`${endStop.city} (${endStop.arrival})`}
          />
        )}
        {startStop && endStop && (
          <InfoRow
            label="Fare"
            icon={FaMoneyBill}
            text={String(endStop.fare - startStop.fare)}
          />
        )}
        <h4 className=" font-semibold  mt-4 text-sm md:text-base">
          Journey Details:
        </h4>
        <div className="mt-4 grid grid-cols-3 place-items-center max-w-[20rem] mx-auto">
          <h5 className="text-xs md:text-sm font-medium text-neutral-400 mb-3">
            Arrival
          </h5>
          <h5 className="text-xs md:text-sm font-medium text-neutral-400 mb-3">
            Bus Stop
          </h5>
          <h5 className="text-xs md:text-sm font-medium text-neutral-400 mb-3 whitespace-nowrap">
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
          className="primary-button flex items-center gap-2 w-full mt-8 justify-center"
          onClick={handleBooking}
        >
          <IoTicketSharp />
          <span>Book Tickets</span>
        </button>
      )}
    </aside>
  );
}

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
          className={`h-16 col-span-full w-[2px] ${
            lineActive ? "bg-theme-500" : "bg-neutral-500"
          } mx-auto`}
        />
      )}
      <div className="font-poppins text-xs md:text-sm font-medium text-neutral-700/75">
        {stop.arrival ?? "Starts here"}
      </div>
      <div
        className={`relative font-poppins rounded-xl border ${
          stopActive
            ? "border-theme-500 bg-theme-100 text-theme-700"
            : "border-neutral-500 bg-neutral-200/75 text-neutral-700"
        } font-semibold p-2 text-xs md:text-sm cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        onFocus={handleMouseEnter}
        onBlur={handleMouseOut}
        tabIndex={0}
      >
        {stop.city}
        {isHovered && city && (
          <div className="left-arrow z-10 bg-neutral-200 shadow px-3 py-1 rounded right-0 translate-x-[120%] top-1/2 -translate-y-1/2">
            {city.name}
          </div>
        )}
      </div>
      <div className="font-poppins text-xs md:text-sm font-medium text-neutral-700/75">
        {stop.departure ?? "Ends Here"}
      </div>
    </>
  );
}
