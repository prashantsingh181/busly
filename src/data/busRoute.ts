import type { Route } from "@/types/bus";

export const routes: Route[] = [
  {
    id: "ROUTE1",
    name: "Lucknow -> Agra → Delhi → Jaipur",
    stops: [
      { city: "LKO", arrival: null, departure: "03:00 AM", fare: 0 },
      { city: "AGC", arrival: "06:00 AM", departure: "06:15 AM", fare: 300 },
      { city: "DEL", arrival: "09:00 AM", departure: "09:30 AM", fare: 650 },
      { city: "JAI", arrival: "01:00 PM", departure: null, fare: 1200 },
    ],
  },
  {
    id: "ROUTE2",
    name: "Jaipur → Delhi → Agra -> Lucknow",
    stops: [
      { city: "JAI", arrival: null, departure: "02:00 PM", fare: 0 },
      { city: "DEL", arrival: "05:00 PM", departure: "05:30 PM", fare: 300 },
      { city: "AGC", arrival: "08:00 PM", departure: "08:15 PM", fare: 650 },
      { city: "LKO", arrival: "11:00 PM", departure: null, fare: 1200 },
    ],
  },
  {
    id: "ROUTE3",
    name: "Mumbai → Thane → Pune -> Banglore",
    stops: [
      { city: "BOM", arrival: null, departure: "08:30 AM", fare: 0 },
      { city: "THA", arrival: "09:30 AM", departure: "09:45 AM", fare: 400 },
      { city: "PNQ", arrival: "12:30 PM", departure: "01:00 PM", fare: 600 },
      { city: "BLR", arrival: "03:00 PM", departure: null, fare: 800 },
    ],
  },
  {
    id: "ROUTE4",
    name: "Banglore -> Pune → Thane → Mumbai",
    stops: [
      { city: "BLR", arrival: null, departure: "01:00 PM", fare: 0 },
      { city: "PNQ", arrival: "03:00 PM", departure: "03:30 PM", fare: 400 },
      { city: "THA", arrival: "05:30 PM", departure: "05:45 PM", fare: 600 },
      { city: "BOM", arrival: "08:30 PM", departure: null, fare: 800 },
    ],
  },
  {
    id: "ROUTE5",
    name: "Chennai → Vellore → Bangalore",
    stops: [
      { city: "MAA", arrival: null, departure: "09:00 PM", fare: 0 },
      { city: "VLR", arrival: "11:00 PM", departure: "11:15 PM", fare: 850 },
      { city: "BLR", arrival: "05:00 AM", departure: null, fare: 1050 },
    ],
  },
  {
    id: "ROUTE6",
    name: "Banglore → Vellore → Chennai",
    stops: [
      { city: "BLR", arrival: null, departure: "06:00 AM", fare: 0 },
      { city: "VLR", arrival: "08:00 AM", departure: "08:15 AM", fare: 850 },
      { city: "MAA", arrival: "12:00 PM", departure: null, fare: 1050 },
    ],
  },
  {
    id: "ROUTE7",
    name: "Delhi → Kanpur → Lucknow",
    stops: [
      { city: "DEL", arrival: null, departure: "10:00 PM", fare: 0 },
      { city: "KNP", arrival: "04:00 AM", departure: "04:15 AM", fare: 800 },
      { city: "LKO", arrival: "07:00 AM", departure: null, fare: 1200 },
    ],
  },
  {
    id: "ROUTE8",
    name: "Lucknow → Kanpur → Delhi",
    stops: [
      { city: "LKO", arrival: null, departure: "08:00 AM", fare: 0 },
      { city: "KNP", arrival: "12:00 PM", departure: "12:15 PM", fare: 800 },
      { city: "DEL", arrival: "03:00 PM", departure: null, fare: 1200 },
    ],
  },
  {
    id: "ROUTE9",
    name: "Delhi → Mumbai → Chennai",
    stops: [
      { city: "DEL", arrival: null, departure: "08:00 AM", fare: 0 },
      { city: "BOM", arrival: "02:00 PM", departure: "02:15 PM", fare: 1200 },
      { city: "MAA", arrival: "08:00 PM", departure: null, fare: 2000 },
    ],
  },
  {
    id: "ROUTE10",
    name: "Chennai → Mumbai → Delhi",
    stops: [
      { city: "MAA", arrival: null, departure: "08:00 AM", fare: 0 },
      { city: "BOM", arrival: "02:00 PM", departure: "02:15 PM", fare: 1200 },
      { city: "DEL", arrival: "08:00 PM", departure: null, fare: 2000 },
    ],
  },
  {
    id: "ROUTE11",
    name: "Delhi -> Kanpur → Thane → Vellore",
    stops: [
      { city: "DEL", arrival: null, departure: "08:00 AM", fare: 0 },
      { city: "KNP", arrival: "10:00 AM", departure: "10:15 AM", fare: 600 },
      { city: "THA", arrival: "01:00 PM", departure: "01:15 PM", fare: 2000 },
      { city: "VLR", arrival: "03:00 PM", departure: null, fare: 2400 },
    ],
  },
  {
    id: "ROUTE12",
    name: "Vellore -> Thane → Kanpur → Delhi",
    stops: [
      { city: "VLR", arrival: null, departure: "08:00 AM", fare: 0 },
      { city: "THA", arrival: "10:00 AM", departure: "10:15 AM", fare: 600 },
      { city: "KNP", arrival: "01:00 PM", departure: "01:15 PM", fare: 2000 },
      { city: "DEL", arrival: "03:00 PM", departure: null, fare: 2400 },
    ],
  },
  {
    id: "ROUTE13",
    name: "Delhi → Agra → Mumbai → Pune → Bangalore",
    stops: [
      { city: "DEL", arrival: null, departure: "06:00 AM", fare: 0 },
      { city: "AGC", arrival: "09:00 AM", departure: "09:15 AM", fare: 400 },
      { city: "BOM", arrival: "02:00 PM", departure: "02:15 PM", fare: 1200 },
      { city: "PNQ", arrival: "04:30 PM", departure: "04:45 PM", fare: 1600 },
      { city: "BLR", arrival: "09:00 PM", departure: null, fare: 2200 },
    ],
  },
  {
    id: "ROUTE14",
    name: "Bangalore → Pune → Mumbai → Agra → Delhi",
    stops: [
      { city: "BLR", arrival: null, departure: "07:00 AM", fare: 0 },
      { city: "PNQ", arrival: "12:00 PM", departure: "12:15 PM", fare: 600 },
      { city: "BOM", arrival: "02:00 PM", departure: "02:15 PM", fare: 800 },
      { city: "AGC", arrival: "07:00 PM", departure: "07:15 PM", fare: 1600 },
      { city: "DEL", arrival: "10:00 PM", departure: null, fare: 2000 },
    ],
  },
  {
    id: "ROUTE15",
    name: "Lucknow → Kanpur → Vellore → Chennai → Bangalore",
    stops: [
      { city: "LKO", arrival: null, departure: "08:00 PM", fare: 0 },
      { city: "KNP", arrival: "10:30 PM", departure: "10:45 PM", fare: 400 },
      { city: "VLR", arrival: "06:00 AM", departure: "06:15 AM", fare: 1600 },
      { city: "MAA", arrival: "09:00 AM", departure: "09:15 AM", fare: 1900 },
      { city: "BLR", arrival: "12:00 PM", departure: null, fare: 2200 },
    ],
  },
  {
    id: "ROUTE16",
    name: "Bangalore → Chennai → Vellore → Kanpur → Lucknow",
    stops: [
      { city: "BLR", arrival: null, departure: "06:00 AM", fare: 0 },
      { city: "MAA", arrival: "09:00 AM", departure: "09:15 AM", fare: 400 },
      { city: "VLR", arrival: "12:00 PM", departure: "12:15 PM", fare: 800 },
      { city: "KNP", arrival: "08:00 PM", departure: "08:15 PM", fare: 1800 },
      { city: "LKO", arrival: "10:00 PM", departure: null, fare: 2000 },
    ],
  },
  {
    id: "ROUTE17",
    name: "Jaipur → Delhi → Thane → Mumbai → Pune",
    stops: [
      { city: "JAI", arrival: null, departure: "05:00 AM", fare: 0 },
      { city: "DEL", arrival: "09:00 AM", departure: "09:15 AM", fare: 500 },
      { city: "THA", arrival: "02:00 PM", departure: "02:15 PM", fare: 1800 },
      { city: "BOM", arrival: "03:00 PM", departure: "03:15 PM", fare: 2000 },
      { city: "PNQ", arrival: "05:00 PM", departure: null, fare: 2300 },
    ],
  },
  {
    id: "ROUTE18",
    name: "Pune → Mumbai → Thane → Delhi → Jaipur",
    stops: [
      { city: "PNQ", arrival: null, departure: "07:00 AM", fare: 0 },
      { city: "BOM", arrival: "09:00 AM", departure: "09:15 AM", fare: 400 },
      { city: "THA", arrival: "10:00 AM", departure: "10:15 AM", fare: 600 },
      { city: "DEL", arrival: "04:00 PM", departure: "04:15 PM", fare: 1600 },
      { city: "JAI", arrival: "07:00 PM", departure: null, fare: 2000 },
    ],
  },
];

export function getRouteByRouteId(routeId: string) {
  return routes.find((route) => route.id === routeId);
}

export function getPricePerSeat(route: Route, from: string, to: string) {
  const fromIndex = route.stops.findIndex((stop) => stop.city === from);
  const toIndex = route.stops.findIndex((stop) => stop.city === to);

  if (fromIndex === -1 || toIndex === -1) return 0;
  const startIndex = Math.min(fromIndex, toIndex);
  const endIndex = Math.max(fromIndex, toIndex);
  return route.stops[endIndex].fare - route.stops[startIndex].fare;
}

export function doJourneysOverlap(
  route: Route,
  from1: string,
  to1: string,
  from2: string,
  to2: string,
) {
  const cityIndex = route.stops.reduce<Record<string, number>>(
    (acc, stop, index) => ({ ...acc, [stop.city]: index }),
    {},
  );

  const fromIndex1 = cityIndex[from1];
  const toIndex1 = cityIndex[to1];
  const fromIndex2 = cityIndex[from2];
  const toIndex2 = cityIndex[to2];

  if (
    fromIndex1 === undefined ||
    toIndex1 === undefined ||
    fromIndex2 === undefined ||
    toIndex2 === undefined
  ) {
    return false;
  }

  // Ensure from comes before to for both journeys
  const start1 = Math.min(fromIndex1, toIndex1);
  const end1 = Math.max(fromIndex1, toIndex1);
  const start2 = Math.min(fromIndex2, toIndex2);
  const end2 = Math.max(fromIndex2, toIndex2);

  return !(end1 <= start2 || end2 <= start1);
}
