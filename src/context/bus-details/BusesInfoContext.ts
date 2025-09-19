import { createContext, useContext } from "react";
import type { BookedSeat, Bus } from "../../types/bus";
import type { Ticket } from "../../types/tickets";

interface BusInfoContextType {
  busesInfo: (Bus & {
    bookedSeats: BookedSeat[];
  })[];
  bookTicket: (ticket: Ticket) => void;
}

export const BusesInfoContext = createContext<BusInfoContextType | null>(null);

export const useBusesInfo = () => {
  const context = useContext(BusesInfoContext);
  // if context is used outside provider then throw error to let the developer know
  if (context === null) {
    throw new Error("useBusesInfo should be used inside BusesInfoContext");
  }
  return context;
};
