import { getCityByCityCode } from "@/data/city";
import type { BusStop, Route } from "@/types/bus";
import { useState } from "react";

interface RouteMapProps {
  route: Route;
  startIndex: number | null;
  endIndex: number | null;
}

export default function RouteMap({
  route,
  startIndex,
  endIndex,
}: Readonly<RouteMapProps>) {
  return (
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
      {route.stops.map((stop, index) => (
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
