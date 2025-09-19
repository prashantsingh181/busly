import type { Bus, BusWithRoute } from "../types/bus";
import { routes } from "./busRoute";

export const buses: Bus[] = [
  {
    id: "BUS101",
    name: "ExpressLine Travels",
    type: "AC Sleeper",
    totalSeats: 30,
    img: "/buses/bus1.webp",
    routeIds: ["ROUTE1", "ROUTE2"],
  },
  {
    id: "BUS102",
    name: "InterCity Travels",
    type: "Non-AC Seater",
    totalSeats: 40,
    img: "/buses/bus2.webp",
    routeIds: ["ROUTE3", "ROUTE4"],
  },
  {
    id: "BUS103",
    name: "Southern Comfort",
    type: "AC Sleeper",
    totalSeats: 32,
    img: "/buses/bus4.webp",
    routeIds: ["ROUTE5", "ROUTE6", "ROUTE1", "ROUTE2"],
  },
];

export function filterBuses(fromCity: string, toCity: string) {
  const filteredBuses: BusWithRoute[] = [];
  const routesChecked = new Set();

  // loop over the buses
  buses.forEach((bus) => {
    const { routeIds } = bus;

    // loop over the routes of buses
    for (const routeId of routeIds) {
      // check if you have already checked for the route
      if (routesChecked.has(routeId)) {
        continue;
      }
      const route = routes.find((route) => route.id === routeId);
      if (route) {
        let startStopFound;

        // loop over stops of route
        for (const stop of route.stops) {
          // if toCity is found and fromCity has already been found add bus to filtered list
          if (startStopFound && stop.city === toCity) {
            filteredBuses.push({
              ...bus,
              routeInfo: {
                from: startStopFound.city,
                to: stop.city,
                route: route,
              },
            });
          }
          if (stop.city === fromCity) {
            startStopFound = stop;
          }
        }
      }
    }
  });
  return filteredBuses;
}
