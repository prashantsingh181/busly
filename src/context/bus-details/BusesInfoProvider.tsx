import { TICKET_STORAGE_KEY } from "../../config/configKeys";
import { buses } from "../../data/bus";
import useLocalStorage from "../../hooks/useLocalStorage";
import type { Ticket } from "../../types/tickets";
import { BusesInfoContext } from "./BusesInfoContext";

interface BusInfoProviderProps {
  children: React.ReactNode;
}

export default function BusesInfoProvider({
  children,
}: Readonly<BusInfoProviderProps>) {
  const [tickets, setTickets] = useLocalStorage<Ticket[]>(
    TICKET_STORAGE_KEY,
    []
  );

  // combining booked seats info with busesInfo
  const busesInfo = buses.map((bus) => {
    const ticket = tickets.find((ticket) => ticket.busId === bus.id);
    if (ticket) {
      return {
        ...bus,
        bookedSeats: ticket.bookedSeats.map((bookedSeat) => ({
          from: ticket.from,
          to: ticket.to,
          seatNo: bookedSeat.seatNo,
        })),
      };
    } else {
      return { ...bus, bookedSeats: [] };
    }
  });

  function bookTicket(ticket: Ticket) {
    setTickets((prevTicket) => [...prevTicket, ticket]);
  }

  return <BusesInfoContext value={{ busesInfo, bookTicket }}>{children}</BusesInfoContext>;
}
