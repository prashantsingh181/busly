import { createContext, useContext } from "react";
import type { BusWithBookedSeats } from "@/types/bus";
import type { Ticket } from "@/types/tickets";

interface BusInfoContextType {
  busesInfo: BusWithBookedSeats[];
  getBusByBusId: (busId: string) => BusWithBookedSeats | undefined;
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
