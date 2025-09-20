import type { Route } from "@/types/bus";

export const routes: Route[] = [
  {
    id: "ROUTE1",
    name: "Agra → Delhi → Jaipur",
    stops: [
      { city: "AGC", arrival: null, departure: "06:00 AM", fare: 0 },
      { city: "DEL", arrival: "09:00 AM", departure: "09:30 AM", fare: 650 },
      { city: "JAI", arrival: "01:00 PM", departure: null, fare: 1200 },
    ],
  },
  {
    id: "ROUTE2",
    name: "Jaipur → Delhi → Agra",
    stops: [
      { city: "JAI", arrival: null, departure: "02:00 PM", fare: 0 },
      { city: "DEL", arrival: "05:00 PM", departure: "05:30 PM", fare: 650 },
      { city: "AGC", arrival: "08:00 PM", departure: null, fare: 1200 },
    ],
  },
  {
    id: "ROUTE3",
    name: "Mumbai → Thane → Pune",
    stops: [
      { city: "BOM", arrival: null, departure: "08:30 AM", fare: 0 },
      { city: "THA", arrival: "09:30 AM", departure: "09:45 AM", fare: 400 },
      { city: "PNQ", arrival: "12:30 PM", departure: null, fare: 600 },
    ],
  },
  {
    id: "ROUTE4",
    name: "Pune → Thane → Mumbai",
    stops: [
      { city: "PNQ", arrival: null, departure: "01:30 PM", fare: 0 },
      { city: "THA", arrival: "02:30 PM", departure: "02:45 PM", fare: 400 },
      { city: "BOM", arrival: "05:30 PM", departure: null, fare: 600 },
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
  // {
  //   id: "ROUTE7",
  //   name: "Delhi → Kanpur → Lucknow",
  //   stops: [
  //     { city: "DEL", arrival: null, departure: "10:00 PM", fare: 0 },
  //     { city: "KNP", arrival: "04:00 AM", departure: "04:15 AM", fare: 800 },
  //     { city: "LKO", arrival: "07:00 AM", departure: null, fare: 1200 },
  //   ],
  // },
  // {
  //   id: "ROUTE8",
  //   name: "Lucknow → Kanpur → Delhi",
  //   stops: [
  //     { city: "LKO", arrival: null, departure: "08:00 AM", fare: 0 },
  //     { city: "KNP", arrival: "12:00 PM", departure: "12:15 PM", fare: 800 },
  //     { city: "DEL", arrival: "03:00 PM", departure: null, fare: 1200 },
  //   ],
  // },
];

export function getRouteByRouteId(routeId: string) {
  return routes.find((route) => route.id === routeId);
}
