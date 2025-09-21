import { createContext, useContext } from "react";
import type { Ticket } from "@/types/tickets";

interface TicketInfoContextType {
  userTickets: Ticket[];
  bookTicket: (ticket: Ticket) => void;
  getBookedSeats: (
    busId: string,
    from: string,
    to: string,
    date: string,
  ) => number[];
}

export const TicketInfoContext = createContext<TicketInfoContextType | null>(
  null,
);

export const useTicketsInfo = () => {
  const context = useContext(TicketInfoContext);
  // if context is used outside provider then throw error to let the developer know
  if (context === null) {
    throw new Error("useTicketsInfo should be used inside TicketInfoContext");
  }
  return context;
};
