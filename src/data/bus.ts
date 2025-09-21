import type { Bus, BusWithRoute } from "@/types/bus";
import { getRouteByRouteId } from "./busRoute";

export const buses: Bus[] = [
  {
    id: "BUS101",
    name: "JBM Travels",
    type: "Seater",
    totalSeats: 30,
    img: "/buses/bus1.webp",
    routeIds: ["ROUTE1", "ROUTE2", "ROUTE3", "ROUTE4"],
    description:
      "Reliable seater bus offering smooth rides for short and long trips.",
  },
  {
    id: "BUS102",
    name: "Volvo Mint",
    type: "Sleeper",
    totalSeats: 20,
    img: "/buses/bus2.webp",
    routeIds: ["ROUTE3", "ROUTE4", "ROUTE5", "ROUTE6"],
    description:
      "Luxurious sleeper bus designed for overnight comfort and relaxation.",
  },
  {
    id: "BUS103",
    name: "Southern Comfort",
    type: "Seater",
    totalSeats: 32,
    img: "/buses/bus3.webp",
    routeIds: ["ROUTE5", "ROUTE6", "ROUTE7", "ROUTE8"],
    description:
      "Spacious seater bus with excellent seating and a smooth journey.",
  },
  {
    id: "BUS104",
    name: "Child Bus",
    type: "Seater",
    totalSeats: 32,
    img: "/buses/bus4.webp",
    routeIds: ["ROUTE7", "ROUTE8", "ROUTE9", "ROUTE10"],
    description:
      "Family-friendly bus offering safe and comfortable seating for all ages.",
  },
  {
    id: "BUS105",
    name: "MarcoPolo Touring",
    type: "Seater",
    totalSeats: 32,
    img: "/buses/bus5.webp",
    routeIds: ["ROUTE9", "ROUTE10", "ROUTE11", "ROUTE12"],
    description:
      "Modern touring bus built for comfort and style on long-distance routes.",
  },
  {
    id: "BUS106",
    name: "Volvo Green",
    type: "Sleeper",
    totalSeats: 20,
    img: "/buses/bus6.webp",
    routeIds: ["ROUTE11", "ROUTE12", "ROUTE13", "ROUTE14"],
    description:
      "Eco-friendly sleeper bus with premium interiors for a restful journey.",
  },
  {
    id: "BUS107",
    name: "Volvo Maroon",
    type: "Seater",
    totalSeats: 32,
    img: "/buses/bus7.webp",
    routeIds: ["ROUTE13", "ROUTE14", "ROUTE15", "ROUTE16"],
    description:
      "Elegant seater bus combining modern design with reliable service.",
  },
  {
    id: "BUS108",
    name: "TSRTC Buses",
    type: "Sleeper",
    totalSeats: 20,
    img: "/buses/bus8.webp",
    routeIds: ["ROUTE15", "ROUTE16", "ROUTE17", "ROUTE18"],
    description:
      "Trusted government sleeper service ensuring affordability and comfort.",
  },
  {
    id: "BUS109",
    name: "Lake Side",
    type: "Seater",
    totalSeats: 32,
    img: "/buses/bus9.webp",
    routeIds: ["ROUTE15", "ROUTE16", "ROUTE17", "ROUTE18"],
    description:
      "Relaxing seater bus known for scenic routes and peaceful rides.",
  },
];

export function getBusByBusId(busId: string) {
  return buses.find((bus) => bus.id === busId);
}

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
      const route = getRouteByRouteId(routeId);
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
