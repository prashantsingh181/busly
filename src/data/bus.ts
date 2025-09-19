import type { Bus } from "../types/bus";

export const buses: Bus[] = [
  {
    id: "BUS101",
    name: "ExpressLine Travels",
    type: "AC Sleeper",
    totalSeats: 30,
    routes: [
      {
        from: "DEL",
        to: "AGC",
        departure: "06:00 AM",
        arrival: "09:00 AM",
        fare: 650,
      },
      {
        from: "AGC",
        to: "JAI",
        departure: "09:30 AM",
        arrival: "01:00 PM",
        fare: 150,
      },
    ],
  },
  {
    id: "BUS102",
    name: "InterCity Travels",
    type: "Non-AC Seater",
    totalSeats: 40,
    routes: [
      {
        from: "BOM",
        to: "THA",
        departure: "08:30 AM",
        arrival: "09:30 AM",
        fare: 400,
      },
      {
        from: "THA",
        to: "PNQ",
        departure: "09:45 AM",
        arrival: "12:30 PM",
        fare: 200,
      },
    ],
  },
  {
    id: "BUS103",
    name: "Southern Comfort",
    type: "AC Sleeper",
    totalSeats: 32,
    routes: [
      {
        from: "MAA",
        to: "VLR",
        departure: "09:00 PM",
        arrival: "11:00 PM",
        fare: 850,
      },
      {
        from: "VLR",
        to: "BLR",
        departure: "11:15 PM",
        arrival: "05:00 AM",
        fare: 200,
      },
    ],
  },
];
