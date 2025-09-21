import type { Ticket } from "@/types/tickets";

export const tickets: Ticket[] = [
  {
    userId: 1,
    busId: "BUS101",
    ticketId: "1",
    date: "2025-09-21T09:39:56.242Z",
    routeId: "ROUTE1",
    from: "AGC",
    to: "DEL",
    mobileNumber: "1234567890",
    email: "demo@demo.com",
    bookedSeats: [
      {
        seatNo: 2,
        passengerName: "string",
        passengerAge: 2,
      },
    ],
  },
];
